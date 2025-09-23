import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
      <p className="opacity-80 mb-6">This route may be part of the SPA. Try going home.</p>
      <Link to="/" className="underline decoration-dotted">← Back to Home</Link>
    </div>
  )
}
