import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './Pages/Projects'
import Agence from './Pages/Agence'



function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
