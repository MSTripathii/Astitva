import React from 'react'
import { ForAdoption } from '../Constant/Common'

const ContactUs = () => {
  return (
    <div className='my-10'>
      <h1>Adopt these Little One's</h1>
      {
        ForAdoption.map((data, index) => (
          <div className="grid lg:grid-col-2" key={index}>
            <div className="">
              <img src={data.src} alt="puppy" />
            </div>
            <div className="">
              <h3><span>Name:- </span>{data.name}</h3>
              <h3><span>Age:-</span>{data.age}</h3>
              <h3><span>Contact:-</span>{data.contact}</h3>
              <h3><span>Location:-</span>{data.location}</h3>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ContactUs
