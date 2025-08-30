import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
      <div className='font-[font2] flex items-center justify-center gap-10 -mb-3 '>
      <div className='flex items-center justify-center leading-[5vw]'>
        <Link to="/projects" className='border-[3px] border-white px-5 py-2 text-[6vw] rounded-full uppercase hover:text-[#D3FD50] hover:border-[#D3FD50]'>Projects</Link>
      </div>
      <div className='flex items-center justify-center leading-[5vw]'>
        <Link to="/agence" className='border-[3px] border-white px-5 py-2 text-[6vw] rounded-full uppercase hover:text-[#D3FD50] hover:border-[#D3FD50]'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottom