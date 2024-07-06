import React from 'react'
import profile from '../assets/profile_pic.jpeg'
import { team } from '../Constant/Common'

const Team = () => {
  return (
    <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-20 lg:mx-36 text-center mt-14'>
        {
          team.map((data, index)=>(
        <div className="border border-white mb-8 rounded-lg p-3 flex flex-col justify-center items-center md:mx-4">
          <div className="className='h-1/2 w-full mx-2 border border-teal-300 rounded-lg p-2" key={index}>
            <img src={data.image} alt="profile picture" className='rounded-lg'/>
          </div>
          <h1 className='mt-8 text-xl lg:text-3xl text-teal-400'>{data.name}</h1>
          <p className='mt-4'>{data.about}</p>
        </div>
          ))}
      </div>
  )
}

export default Team
