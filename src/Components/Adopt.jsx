import React from 'react'
import { ForAdoption } from '../Constant/Common'

const ContactUs = () => {
  return (
    <>
    <h1 className='text-6xl text-center my-10 border-b border-teal-300 p-3 leading-normal'>Adopt these <span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic'>Little One's</span></h1>
    <div className='my-10 grid lg:grid-cols-2 w-full'>
      {
        ForAdoption.map((data, index) => (
          <div className="grid md:grid-cols-3 border border-white p-4 rounded-lg m-3 justify-center items-center hover:scale-110 hover:bg-white hover:text-black" key={index}>
            <div className="mx-auto hover:border p-3 hover:border-black hover:scale-105 rounded-lg">
              <img src={data.src} alt="puppy" className='rounded-lg'/>
            </div>
            <div className="text-center my-4 mx-3">
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Name:- </span>{data.name}</h3>
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Age:-</span>{data.age}</h3>
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Contact:-</span>{data.contact}</h3>
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Location:-</span>{data.location}</h3>
            </div>
            <h1 className='hidden md:inline-block md:mx-auto md:text-xl md:ml-3'>{data.quote}</h1>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default ContactUs
