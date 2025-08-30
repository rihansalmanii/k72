import React from 'react'
import bgVid from '../../assets/bgVid.mp4'

const Video = ({className}) => {
  return (
    <div className='h-full w-full'>
        <video src={bgVid} autoPlay muted loop className={`h-full w-full object-cover block ${className}`}></video>
    </div>
  )
}

export default Video