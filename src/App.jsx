import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {
  return (
    <div className='absolutete top-0'>
      <FullScreenNav />
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes> */}
    </div>
  )
}

export default App