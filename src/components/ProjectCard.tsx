type ProjectCardProps = {
  title: string
  desc: string
  stack: string
  href: string
  img?: string
  demoHref?: string
}

export default function ProjectCard({ title, desc, stack, href, img, demoHref }: ProjectCardProps) {
  return (
    <div className="p-4 rounded-xl border hover:bg-zinc-50">
      {img && (
        <div className="aspect-video rounded-lg overflow-hidden ring-1 ring-indigo-200 mb-3 cursor-pointer">
          <a href={demoHref ? demoHref : href} rel="noopener noreferrer" target="_blank">
            <img
              src={img}
              alt={`${title} screenshot`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      )}
      <div className="font-medium">{title}</div>
      <div className="text-sm opacity-80">{desc}</div>
      <div className="text-xs opacity-70 mt-2">{stack}</div>

      <div className="mt-3 flex flex-wrap gap-2">
        {demoHref && (
          <a
            href={demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:brightness-110"
          >
            Try it
          </a>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg border text-sm hover:bg-zinc-50"
        >
          View code
        </a>
      </div>
    </div>
  )
}
