import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
