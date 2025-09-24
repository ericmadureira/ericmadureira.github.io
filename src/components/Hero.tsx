import { useState } from "react"

export default function Hero() {
  const [playing, setPlaying] = useState(false)

  const play = (e?: React.MouseEvent) => {
    e?.preventDefault()
    setPlaying(true)
  }

  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      {/* Texto + CTAs */}
      <div>
        <p className="text-3xl leading-tight font-semibold">
          Full-Stack Engineer<br />
          <span className="opacity-80">React • TypeScript • Node</span>
        </p>
        <p className="mt-3 text-slate-600">
          I build reliable web apps and automations. Remote-ready. Time zones friendly.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center-safe">
          <a
            href="#intro"
            onClick={play}
            className="px-4 py-2 rounded-xl bg-yellow-400 text-slate-900 font-medium hover:brightness-95 hover:scale-[1.04] transition"
          >
            🎥 Watch 1-min intro
          </a>
          <a
            href="https://calendar.app.google/7F88y2vfDi17tyoLA"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:brightness-95 hover:scale-[1.04] transition"
          >
            📅 Schedule a chat
          </a>
          <a
            href="https://github.com/ericmadureira"
            target="_blank"
            className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-white hover:scale-[1.04] transition"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eric-madureira/"
            target="_blank"
            className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-white hover:scale-[1.04] transition"
          >
            🔗 LinkedIn
          </a>
          <a
            href="/assets/eric-madureira-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-white hover:scale-[1.04] transition"
            aria-label="Open resume PDF in a new tab"
          >
            📑 Resume (PDF)
          </a>
          <a
            href="mailto:ericmadu416@gmail.com"
            className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-white hover:scale-[1.04] transition"
          >
            ✉️ Email
          </a>
        </div>
      </div>

      {/* Thumbnail -> Iframe no MESMO lugar */}
      <div id="intro" className="aspect-video rounded-2xl ring-1 ring-blue-200 overflow-hidden">
        {playing ? (
          <iframe
            className="w-full h-full"
            src="https://youtube.com/embed/glHMSWBm5lA?rel=0&autoplay=1"
            title="Eric Madureira — 1-min intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            onClick={play}
            className="group relative w-full h-full"
            aria-label="Play intro video"
          >
            {/* coloque sua imagem em /public/assets/intro-thumb.jpg */}
            <img
              src="/assets/intro-thumb.jpg"
              alt="Intro thumbnail"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition"
            />
            <span className="absolute inset-0 grid content-end justify-center mb-6">
              <span className="rounded-full px-4 py-2 text-sm font-medium bg-white/90 text-slate-900 ring-1 ring-slate-300 w-32">
                ▶️ Play
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  )
}
