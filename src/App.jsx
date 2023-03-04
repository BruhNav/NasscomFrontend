import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ModelMetrix from './pages/ModelMetrix'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/model-metrix', element: <ModelMetrix />},
  { path: '/about', element: <About />}
])

function App() {

  return (
    <div className="App mx-20">
      <Header />
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
