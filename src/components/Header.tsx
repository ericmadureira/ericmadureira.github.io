import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className='font-semibold text-xl'>Eric Madureira</NavLink>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'font-medium' : ''}>Home</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'font-medium' : ''}>Projects</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? 'font-medium' : ''}>Blog</NavLink>
        </nav>
      </div>
    </header>
  )
}
