import React from 'react'
import { Search } from 'lucide-react'
import { shelters } from '../Constant/Common'

const Shelters = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className="w-full flex justify-center">
        <input type="text" className='text-center p-2 lg:w-1/3 md:w-1/2 bg-teal-300 rounded-lg border-4 border-white text-black font-bold text-lg lg:my-20 my-10 placeholder:text-black' placeholder='Enter your Location' />
        <button className='ml-4'>{<Search className='w-10 h-10' />}</button>
      </div>
      <div className="flex w-full lg:flex-row flex-col">

        <div className="lg:w-[30%]">
          <h1 className='text-center text-5xl'>Places we have Shelters</h1>
          <ul className='mt-10 flex items-center flex-col lg:items-start lg:ml-16 my-5'>
            <li className='text-2xl m-2'><a href="">Need Help in KANPUR</a></li>
            <li className='text-2xl m-2'><a href="">Need Help in NAGPUR</a></li>
            <li className='text-2xl m-2 '><a href="">Need Help in MUMBAI</a></li>
            <li className='text-2xl m-2 '><a href="">Need Help in DELHI</a></li>
            <li className='text-2xl m-2'><a href="">Need Help in BANGLORE</a></li>
          </ul>
        </div>

        <div className="lg:w-[60%]">
          {
            shelters.map((data, index) => (
              <a href="" key={index} className=''>
                <div className="flex border-white lg:mb-10 mb-5 border p-4 flex-col md:flex-row justify-center md:items-center lg:justify-normal">
                <img src={data.src} alt="logo" className='h-1/2 md:w-1/3' />
                <div className="flex flex-col mt-5 justify-center lg:ml-16">
                  <h1 className='text-[15px] mb-1 ml-5 lg:text-xl'><span className='text-lg lg:text-3xl md:mr-1'>Name:</span> {data.shelter_name}</h1>
                  <h1 className='text-[15px] mb-1 ml-5 lg:text-xl'><span className='text-lg lg:text-3xl md:mr-1'>Location:</span> {data.Location}</h1>
                  <h1 className='text-[15px] mb-1 ml-5 lg:text-xl'><span className='text-lg lg:text-3xl md:mr-1'>Contact:</span> {data.Contact}</h1>
                  <h1 className='text-[15px] mb-1 ml-5 lg:text-xl'><span className='text-lg lg:text-3xl md:mr-1'>Active/Inactive:</span> <span className='text-teal-300'>{data.Active_Inactive}</span></h1>
                  <h1 className='text-[15px] mb-1 ml-5 lg:text-xl'><span className='text-lg lg:text-3xl md:mr-1'>Ratings:</span> {data.Ratings}</h1>
                </div>
                
                <div className="flex flex-col justify-center md:w-[20%] lg:ml-10">
                  <h1 className='text-center my-3  font-bold text-2xl lg:text-6xl lg:mb-10'><span className='bg-gradient-to-r from-teal-200 to-teal-600 text-transparent bg-clip-text'>Slogan</span></h1>
                  <p className='text-center md:text-lg lg:text-3xl'>{data.slogan}</p>
                  </div>
              </div>
              </a>
            ))
          }
        </div>


      </div>
    </div>
  )
}

export default Shelters
