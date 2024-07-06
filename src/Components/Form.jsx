import React from 'react'

const Form = () => {
  return (
    <div className='mt-6 text-center'>
      <form action="https://formspree.io/f/movaqyel" method='POST'>
        <label className='text-2xl' htmlFor="Name" >Name: </label><br /><input type="text"placeholder='Enter Your Name' className='p-2 border border-teal-300 my-4' name='Name'/><br />
        <label className='text-2xl' htmlFor="Location" >Location: </label><input type="text" placeholder='Enter your current Location' className='p-2 border border-teal-300 my-4' name='location'/><br />
        <label className='text-2xl' htmlFor="Name" >Condition: </label><input type='text' accept='video/*' placeholder='Enter the Condition of Animal' className='p-2 border border-teal-300 my-4 w-full ' name='Condition'/><br />
        <p className='mb-4 text-xl'>If the condition is critical then share the video in our <span className='italic bg-gradient-to-r from-teal-100 to-teal-400 text-transparent bg-clip-text font-bold text-xl'>WhatsApp Group Imediately</span> we will response.</p>
        <input type="submit" className='p-3 border border-white bg-teal-300 text-black font-bold text-xl rounded-lg hover:scale-110 hover:bg-white hover:border-teal-300 mb-8'/>
        <h1 className='text-xl font-bold leading-normal border-b border-teal-200 p-3'>Currently We are only serving in Kanpur</h1>
        <p className='mt-10 text-lg p-3 border-b border-teal-200'>We will scale as per your Support</p>
      </form>
    </div>
  )
}

export default Form
