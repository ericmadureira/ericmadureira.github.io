import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

const techSkills = ['React','TypeScript','Node.js','PostgreSQL','AWS','FFmpeg','Python (automation)']

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />

      <section>
        <h2 className="text-lg font-semibold mb-4">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <ProjectCard
            title="FlashDeck"
            desc="Quick interview review with flashcards."
            stack="React + TypeScript"
            demoHref="https://ericmadureira.github.io/flashdeck/"
            href="https://github.com/ericmadureira/flashdeck"
            img="/assets/flashdeck-print.jpg"
          />
          <ProjectCard
            title="YouTube Video Automation"
            desc="Script → TTS → FFmpeg pipeline. Publish with metadata."
            stack="Python + FFmpeg"
            href="https://github.com/ericmadureira/video-content-generator"
            img="/assets/video-content-generator.jpg"
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Stack</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {techSkills.map(s => (
            <li key={s} className="px-3 py-1 rounded-full bg-white border">{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">About</h2>
        <p className="text-sm">
          Brazilian dev exploring tech, indie projects, and self-sufficiency 🌿. Passionate about building tools that make life easier.
        </p>
      </section>

      <section className="text-sm">
        <Link className="underline decoration-dotted" to="/projects">See all projects →</Link>
      </section>
    </div>
  )
}
