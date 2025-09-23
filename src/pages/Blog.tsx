import { Link } from 'react-router-dom'
import posts from '../posts/posts.json'

export default function Blog() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p.slug} className="border rounded-lg p-3 hover:bg-zinc-50">
            <Link to={`/blog/${p.slug}`} className="font-medium">{p.title}</Link>
            <div className="text-xs opacity-70">{p.date}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
