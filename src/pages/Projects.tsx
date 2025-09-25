import ProjectCard from "../components/ProjectCard";
import type { ProjectCardProps } from "../components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "FlashDeck",
    desc: "Quick interview review with flashcards.",
    stack: "React + TypeScript",
    href: "https://github.com/ericmadureira/flashdeck",
    demoHref: "https://ericmadureira.github.io/flashdeck/",
    img: "/assets/flashdeck-print.jpg",
  },
  {
    title: "YouTube Video Automation",
    desc: "Script → TTS → FFmpeg pipeline. Publish with metadata.",
    stack: "Python + FFmpeg",
    href: "https://github.com/ericmadureira/video-content-generator",
    img: "/assets/video-content-generator.jpg",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <header className="flex items-baseline justify-between gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Projects
        </h1>

        <a
          href="https://github.com/ericmadureira?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline decoration-dotted"
          aria-label="Open GitHub to see all repositories"
        >
          View all on GitHub →
        </a>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
