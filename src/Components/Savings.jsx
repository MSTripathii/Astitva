import React from 'react'
import { saving } from '../Constant/Common'

const Savings = () => {
  return (
    <>
    <h1 className='lg:text-6xl text-4xl text-center mt-5 p-3 border-b border-white leading-normal'>Some of them to whom <span className='text-4xl lg:text-6xl bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold'>"we helped"</span></h1>
      {
        saving.map((data, index) => (
          <div className=" md:text-2xl flex flex-col lg:flex-row mt-10 lg:my-20 p-3 border border-teal-200 rounded-lg" key={index}>
            <h1 className='text-4xl italic bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold'>{data.name}</h1>
            <div className="h-1/3 mt-5 flex flex-col items-center justify-center border p-2 rounded-lg lg:w-1/3 lg:m-2">
              <h1 className='text-center text-3xl border-b mb-3 md:text-4xl  leading-normal'>Before</h1>
              <img src={data.before} alt="before treatment" className='lg:h-[400px] md:h-[350px]' />
              <p className='mt-5 text-xl text-center md:text-2xl'>{data.before_text}</p>
            </div>
            <div className="h-1/3 mt-10 flex flex-col items-center justify-center border p-2 rounded-lg lg:w-1/3 lg:m-2">
              <h1 className='text-center text-3xl border-b mb-3 l md:text-4xl leading-normal'>Treatment</h1>
              <video src={data.treatment} loop muted autoPlay className='h-[300px] lg:h-[400px]'>Browser dosen't support the video</video>
              <p className='mt-5 text-xl text-center md:text-2xl'>{data.treatment_text}</p>
            </div>
            <div className="h-1/3 mt-10 flex flex-col items-center justify-center border p-2 rounded-lg lg:w-1/3 lg:m-2">
              <h1 className='text-center text-3xl border-b mb-3 md:text-4xl  leading-normal'>After</h1>
              <img src={data.after} alt="after treatment image" className='lg:h-[400px] md:h-[350px]' />
              <p className='mt-5 text-xl text-center md:text-2xl'>{data.after_text}</p>
            </div>
          </div>
        ))
        
      }
      </>
  )
}

export default Savings
