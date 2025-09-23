import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'
import posts from '../posts/posts.json'

export default function Post() {
  const { slug } = useParams()
  const meta = posts.find(p => p.slug === slug)
  const [html, setHtml] = useState('')

  useEffect(() => {
    if (!meta) return
    fetch(`/src/posts/${meta.file}`)
      .then(r => r.text())
      .then(md => setHtml(marked.parse(md)))
  }, [meta])

  if (!meta) return <div className="text-sm opacity-70">Post not found.</div>

  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <div className="text-xs opacity-70">{meta.date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
