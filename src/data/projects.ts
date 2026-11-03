type ProjectMeta = {
  discipline: string[];
  role: string[];
  dates: {
    startDate?: string;
    endDate: string;
  };
  techStack: string[];
};

export type Project = {
  slug: string;
  title: string;
  projectType: "design" | "development" | "design-to-dev";
  cardDescription: string;
  heroDescription: string;
  image: {
    src: string;
    alt: string;
  };
  liveSiteUrl?: string;
  meta: ProjectMeta;
};

export function getProjectBySlug(slug: string): Project {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Case study project not found: ${slug}`);
  }

  return project;
}

export const projects: Project[] = [
  {
    slug: "resume-builder-v2",
    title: "Resume Builder v2",
    projectType: "design-to-dev",
    cardDescription:
      "Created a resume builder with AI integration using Gemini API to generate AI insights stored within a Redis Upstash",
    heroDescription:
      "A local-first resume builder with AI insight generation. Generate a polished, Harvard-format tech resume with built-in Gemini AI!",
    image: {
      src: "/images/case-studies/resume-builder-v2/resume-builder-v2.webp",
      alt: "Resume Builder with Gemini AI"
    },
    liveSiteUrl: "https://resume-builder-v2-elidizon.vercel.app/",
    meta: {
      discipline: ["Web Design", "Fullstack Web Development"],
      role: ["Designer", "Developer"],
      dates: {
        startDate: "September 2026",
        endDate: "November 2026"
      },
      techStack: [
        "Figma",
        "React",
        "Vite",
        "Node",
        "IndexedDB",
        "Redis",
        "Vitest"
      ]
    }
  },
  {
    slug: "billease",
    title: "BillEase: Centralized Invoice App",
    projectType: "design",
    cardDescription:
      "Designed a mobile-first invoicing and inventory app for freelancers and small businesses, validated across 3 usability rounds, with 15 sessions and 70 task attempts with 100% task completion.",
    heroDescription:
      "A centralized invoicing experience designed to reduce the effort of managing invoices, clients, and products or services across separate tools.",
    image: {
      src: "/images/case-studies/billease/BillEase.webp",
      alt: "BillEase centralized invoice app"
    },
    meta: {
      discipline: ["UI/UX Design", "Web Design", "Design Systems"],
      role: ["UI/UX Designer"],
      dates: {
        endDate: "August 2025"
      },
      techStack: ["Figma"]
    }
  },
  {
    slug: "ust-technovation-society",
    title: "UST Technovation Society Website",
    projectType: "design",
    cardDescription:
      "Worked directly under the UI/UX Director to architect our core design system and low-fidelity wireframes. I then oversaw a team of designers through the implementation phase, ensuring all high-fidelity interfaces remained visually consistent and scalable.",
    heroDescription:
      "A digital platform for UST Technovation Society, connecting students through technology, community, events, and initiatives.",
    image: {
      src: "/images/case-studies/ust-technovation-society/ust-technovation-society-hero.webp",
      alt: "UST Technovation Society Organization Website"
    },
    liveSiteUrl: "https://www.usttechsoc.org/",
    meta: {
      discipline: ["UI/UX Design", "Web Design", "Design Systems"],
      role: ["Executive Associate to the Director for UI/UX Design"],
      dates: {
        startDate: "October 2025",
        endDate: "December 2025"
      },
      techStack: ["Figma"]
    }
  }
];
