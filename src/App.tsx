import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div>
          Header + Nav
        </div>
        <h1>Eric Madureira</h1>
        <h2>Software Engineer</h2>
        <div className='hero'>
          Video here
        </div>
        <div className='portfolio'>
          <div>Project 1</div>
          <div>Project 2</div>
        </div>
        <div>
          Social
        </div>
      </main>
    </>
  )
}

export default App
