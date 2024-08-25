import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
