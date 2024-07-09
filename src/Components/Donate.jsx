import React from 'react'
import qr from '../assets/QR.jpeg'

const Donate = () => {
  return (
    <div className='text-center flex flex-col lg:flex-row gap-5 justify-center items-center mt-16' id='donate'>
      <h1 className='text-4xl leading-normal mb-4'>The Reciever's name is <span className='italic'>Madhusudan Tripathi</span></h1>
        <p className='text-xl font-bold mb-4 underline leading-normal'>MUST MATCH</p>
      <img src={qr} alt="scanner" className=''/>
      <h1 className='mt-4 text-5xl leading-normal mx-20'>Bank Account Number</h1>
      <p className='text-3xl'>202002020202002</p>
    </div>
  )
}

export default Donate
