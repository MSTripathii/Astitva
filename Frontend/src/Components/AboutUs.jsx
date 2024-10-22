import React from 'react'
import Footer from  '../Components/Footer';

const AboutUs = () => {
  return (<>
    <div className='flex flex-col items-center my-32 justify-center' id='aboutus'>
      <h1 className='text-4xl lg:text-7xl font-extrabold'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text'>Astitva</span>4<span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text'>Animals</span></h1>
      <p className='text-3xl md:w-1/2 text-center'>We are a group of individual keen to help needed animals with our 100% efforts without any organization support.
      We are <span className='font-bold bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text'>serving from past 10 years</span> without any rest, our team is consist of "x" members everyone is dedicated towards their work 
      with their full potential 
      </p>
      <p className='text-center mt-10 text-3xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text text-5xl font-bold'>Where we help:- </span>We can quickly help anyone in kanpur Nagar might we reach late sometimes because of traffic 
      
      </p>
    </div>
    {/* <Footer className='bottom-0 max-w--screen'></Footer> */}
</>
  )
}

export default AboutUs
