export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm flex flex-wrap gap-4 items-center justify-between">
        <div>© {new Date().getFullYear()} Eric Madureira</div>
        <div className="flex gap-3">
          <a className="underline decoration-dotted" href="https://github.com/ericmadureira" target="_blank">GitHub</a>
          <a className="underline decoration-dotted" href="https://www.linkedin.com/in/eric-madureira/" target="_blank">LinkedIn</a>
          <a className="underline decoration-dotted" href="mailto:contato@seu-dominio.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
