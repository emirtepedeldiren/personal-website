import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getContent, saveContent } from "@/lib/store";
import type { SiteContent } from "@/lib/content";

// Auth for these handlers is enforced by middleware.ts (matcher covers this path).

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  let content: SiteContent;
  try {
    content = (await request.json()) as SiteContent;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!content || typeof content !== "object" || !content.hero || !content.projects) {
    return NextResponse.json({ error: "Malformed content" }, { status: 400 });
  }

  await saveContent(content);
  revalidatePath("/");
  return NextResponse.json({ ok: true });
}
