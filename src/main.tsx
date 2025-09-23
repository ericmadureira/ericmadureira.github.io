import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
// import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'projects', element: <Projects /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <Post /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
