// Central content model for the portfolio site.
// All editable content lives here as a single typed document. The public site
// reads it via getContent(); the admin panel writes it via saveContent().

export type CategoryIcon = "braces" | "wrench";

export type Skill = {
  name: string;
  src: string;
  /** Rendered icon size in px. */
  size: number;
  /** When true the logo is allowed to overflow its box (style maxWidth: none). */
  wide?: boolean;
};

export type SkillCategory = {
  title: string;
  icon: CategoryIcon;
  skills: Skill[];
};

export type Project = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  accent: string;
  glowAlpha: string;
  highlight: string;
  liveUrl?: string;
};

export type SiteContent = {
  hero: {
    badge: string;
    nameLine1: string;
    nameLine2: string;
    titleLine1: string;
    titleLine2: string;
    quote: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    paragraph1: string;
    paragraph2: string;
    focusAreas: string[];
  };
  skills: {
    categories: SkillCategory[];
  };
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
};

// Images already present in /public — offered as a picker in the admin panel.
export const AVAILABLE_IMAGES: string[] = [
  "/python.svg.png",
  "/html.svg.png",
  "/css.svg.png",
  "/js.png",
  "/csharp.png",
  "/dotnet.png",
  "/React-icon.svg.png",
  "/ef2.jpg",
  "/postgres.svg",
  "/vscode.svg.png",
  "/web-storm.png",
  "/cursor.png",
  "/git.svg.png",
  "/mac-terminal.png",
  "/warp.png",
  "/claude-ai.svg",
  "/postman.png",
  "/nodejs-icon.svg",
];

// Default content — extracted verbatim from the original hardcoded components so
// the public site looks identical before any admin edits are made.
export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    badge: "Junior Developer & Computer Science Student",
    nameLine1: "Emir",
    nameLine2: "Tepedeldiren",
    titleLine1: "Mathematics and Computer Science Student",
    titleLine2: "& Software Developer",
    quote: "Code, create and repeat.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Get in Touch",
  },
  about: {
    paragraph1:
      "I'm Emir. I'm a software developer who loves turning ideas into projects. While my academic background gives me a strong foundation in problem-solving, my true drive lies in improving myself. Driven by the mindset of 'code, create, and repeat,' I'm constantly exploring new technologies, refining my skills, and looking for the next chance to build something great.",
    paragraph2:
      "Software should be as rigorous as mathematics and as beautiful as design.",
    focusAreas: [
      "Full Stack Development",
      "Web Development",
      "Mobile App Development",
    ],
  },
  skills: {
    categories: [
      {
        title: "Languages & Frameworks",
        icon: "braces",
        skills: [
          { name: "Python", src: "/python.svg.png", size: 28 },
          { name: "HTML5", src: "/html.svg.png", size: 28 },
          { name: "CSS3", src: "/css.svg.png", size: 28 },
          { name: "JavaScript", src: "/js.png", size: 28 },
          { name: "C#", src: "/csharp.png", size: 60, wide: true },
          { name: ".NET", src: "/dotnet.png", size: 28, wide: true },
          { name: "React", src: "/React-icon.svg.png", size: 28 },
          { name: "Entity Framework", src: "/ef2.jpg", size: 28, wide: true },
          { name: "PostgreSQL", src: "/postgres.svg", size: 28 },
        ],
      },
      {
        title: "Tools",
        icon: "wrench",
        skills: [
          { name: "VS Code", src: "/vscode.svg.png", size: 28 },
          { name: "WebStorm", src: "/web-storm.png", size: 28, wide: true },
          { name: "Cursor", src: "/cursor.png", size: 28 },
          { name: "Git & GitHub", src: "/git.svg.png", size: 28 },
          { name: "Terminal", src: "/mac-terminal.png", size: 28 },
          { name: "Warp", src: "/warp.png", size: 44, wide: true },
          { name: "Claude Code", src: "/claude-ai.svg", size: 28 },
          { name: "Postman", src: "/postman.png", size: 28 },
        ],
      },
    ],
  },
  projects: [
    {
      id: 1,
      number: "01",
      title: "Chevrolet & Opel Spare Parts",
      subtitle: "E-commerce Website",
      description:
        "Chevrolet & Opel Spare Parts is a streamlined e-commerce catalog co-developed for Chevrolet and Opel auto parts. It offers an easy-to-browse product showcase that integrates directly with WhatsApp, providing customers with a fast, personalized, and direct ordering experience.",
      techStack: ["TypeScript", "Vue.js", "Python", "PostgreSQL"],
      accent: "#D3D3D3",
      glowAlpha: "15",
      highlight:
        "Streamlined e-commerce catalog for Chevrolet and Opel auto parts with WhatsApp integration for direct ordering.",
      liveUrl: "https://chevroletopel.com",
    },
    {
      id: 2,
      number: "02",
      title: "Uni Hive",
      subtitle: "A platform for mutual support among university students.",
      description:
        "UniHive is a modern, collaborative ecosystem designed specifically for university students.It enables information sharing and collaboration by integrating it with the internet in an academic environment.",
      techStack: ["TypeScript", "Next.js", "React"],
      accent: "#FFCC00",
      glowAlpha: "12",
      highlight: "Modern, collaborative ecosystem for university students.",
    },
    {
      id: 3,
      number: "03",
      title: "Flappy Dragon",
      subtitle: "Interactive Game",
      description: "A Game of Thrones-themed, 2D game written by Pygame.",
      techStack: ["Python"],
      accent: "#ff453a",
      glowAlpha: "24",
      highlight: "Frame-independent physics with custom pixel art engine.",
    },
    {
      id: 4,
      number: "04",
      title: "Budget Manager",
      subtitle: "Desktop Application",
      description:
        "A highly structured, JSON-backed desktop application engineered using Tkinter, featuring clean data serialization and dynamic asset balance updates.",
      techStack: ["Python", "JSON"],
      accent: "#0071e3",
      glowAlpha: "20",
      highlight:
        "Financial data persistence with real-time balance calculation.",
    },
  ],
  contact: {
    email: "emir.tepedeldiren@gmail.com",
    linkedin: "https://www.linkedin.com/in/emir-tepedeldiren-b1311a263/",
    github: "https://github.com/emirtepedeldiren",
  },
};
