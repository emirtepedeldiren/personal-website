import "server-only";
import { DEFAULT_CONTENT, type SiteContent } from "./content";

// Storage layer for site content.
//
// In production (Vercel) content is persisted in Upstash Redis via the
// KV_REST_API_URL / KV_REST_API_TOKEN environment variables that the Upstash
// integration provides. For local development without those credentials we fall
// back to a JSON file under .data/ so the admin panel is fully testable offline.

const CONTENT_KEY = "portfolio:content";

// The Vercel Upstash/Redis integration may inject either KV_* or UPSTASH_*
// prefixed variables depending on how it's connected — accept both.
function getRedisConfig(): { url?: string; token?: string } {
  return {
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
  };
}

function hasRedis(): boolean {
  const { url, token } = getRedisConfig();
  return Boolean(url && token);
}

async function getRedis() {
  const { Redis } = await import("@upstash/redis");
  const { url, token } = getRedisConfig();
  return new Redis({ url: url!, token: token! });
}

// ---- Local file fallback (dev only) ----------------------------------------

async function readLocal(): Promise<SiteContent | null> {
  try {
    const { readFile } = await import("node:fs/promises");
    const { join } = await import("node:path");
    const file = join(process.cwd(), ".data", "content.json");
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw) as SiteContent;
  } catch {
    return null;
  }
}

async function writeLocal(content: SiteContent): Promise<void> {
  const { mkdir, writeFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const dir = join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await writeFile(
    join(dir, "content.json"),
    JSON.stringify(content, null, 2),
    "utf8"
  );
}

// ---- Public API -------------------------------------------------------------

export async function getContent(): Promise<SiteContent> {
  let stored: SiteContent | null = null;

  if (hasRedis()) {
    const redis = await getRedis();
    // Upstash auto-deserializes JSON stored values.
    stored = await redis.get<SiteContent>(CONTENT_KEY);
  } else {
    stored = await readLocal();
  }

  // Shallow-merge with defaults so newly added top-level sections stay populated
  // even if the stored document predates them.
  if (!stored) return DEFAULT_CONTENT;
  return { ...DEFAULT_CONTENT, ...stored };
}

export async function saveContent(content: SiteContent): Promise<void> {
  if (hasRedis()) {
    const redis = await getRedis();
    await redis.set(CONTENT_KEY, content);
  } else {
    await writeLocal(content);
  }
}
