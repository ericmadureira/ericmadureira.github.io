import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const techSkills = ['React','TypeScript','Node.js','PostgreSQL','AWS','FFmpeg','Python (automation)']

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />

      <section>
        <h2 className="text-lg font-semibold mb-3">Stack</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {techSkills.map(s => (
            <li key={s} className="px-3 py-1 rounded-full bg-zinc-100 border">{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a className="block p-4 rounded-xl border hover:bg-zinc-50" href="https://github.com/ericmadureira/flashdeck" target="_blank">
            <div className="font-medium">FlashDeck</div>
            <div className="text-sm opacity-80">Quick interview review with flashcards.</div>
            <div className="text-xs opacity-70 mt-2">React + TypeScript</div>
          </a>
          <a className="block p-4 rounded-xl border hover:bg-zinc-50" href="https://github.com/ericmadureira/video-content-generator" target="_blank">
            <div className="font-medium">YouTube Video Automation</div>
            <div className="text-sm opacity-80">Script → TTS → FFmpeg pipeline. Publish with metadata.</div>
            <div className="text-xs opacity-70 mt-2">Python + FFmpeg</div>
          </a>
        </div>
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
