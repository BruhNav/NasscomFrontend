import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ModelMetrix from './pages/ModelMetrix'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/model-metrix' element={<ModelMetrix />} />
					<Route path='/about' element={<About />} />
        </Routes>
    </Router>
  )
}

export default App
