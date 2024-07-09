import React from 'react'
import profile from '../assets/profile_pic.jpeg'
import { team } from '../Constant/Common'

const Team = () => {
  return (
    <>
    <div id='team'>
    <h1 className='text-4xl lg:text-6xl text-center border-b border-teal-300 mb-4 leading-normal lg:my-24 my-8 p-2'>These are our Precious <span className='bg-gradient-to-r from-teal-200 to-teal-400 text-transparent bg-clip-text font-bold italic'>"Team Members"</span></h1>
    <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-14 lg:mx-26 text-center mt-14'>
        {
          team.map((data, index)=>(
        <div className="border border-white mb-8 rounded-lg p-3 flex flex-col justify-center items-center md:mx-4 hover:scale-110 hover:text-black hover:bg-white">
          <div className="className='h-1/2 w-full mx-2 border border-teal-300 rounded-lg p-2 flex justify-center" key={index}>
            <img src={data.image} alt="profile picture" className='rounded-lg'/>
          </div>
          <h1 className='mt-8 text-xl lg:text-3xl text-teal-400'>{data.name}</h1>
          <p className='mt-4 text-xl'>{data.about}</p>
          <p className='mt-4 text-xl'><span className='font-bold'>Location:-  </span>{data.location}</p>
        </div>
          ))}
      </div>
    </div>
      </>
  )
}

export default Team
