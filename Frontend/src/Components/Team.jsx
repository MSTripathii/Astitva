// import React from 'react'
import profile from '../assets/profile_pic.jpeg'
import sharma from '../assets/sharma.jpg'
// import { team } from '../Constant/Common'

// const Team = () => {
//   return (
//     <>
//     <div id='team'>
//     <h1 className='text-4xl lg:text-6xl text-center border-b border-teal-300 mb-4 leading-normal lg:my-24 my-8 p-2'>These are our Precious <span className='bg-gradient-to-r from-teal-200 to-teal-400 text-transparent bg-clip-text font-bold italic'>"Team Members"</span></h1>
//     <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-14 lg:mx-26 text-center my-14'>
//         {
//           team.map((data, index)=>(
//         <div className="border border-white mb-8 rounded-lg p-3 flex flex-col justify-center items-center md:mx-4 hover:scale-110 hover:text-black hover:bg-white">
//           <div className="className='h-1/2 w-full mx-2 border border-teal-300 rounded-lg p-2 flex justify-center" key={index}>
//             <img src={data.image} alt="profile picture" className='rounded-lg'/>
//           </div>
//           <h1 className='mt-8 text-xl lg:text-3xl text-teal-400'>{data.name}</h1>
//           <p className='mt-4 text-xl'>{data.about}</p>
//           <p className='mt-4 text-xl'><span className='font-bold'>Location:-  </span>{data.location}</p>
//         </div>
//           ))}
//       </div>
//     </div>
//       </>
//   )
// }

// export default Team

import { AnimatedTestimonials } from "./ui/animated-testimonials";

function Team() {
  const testimonials = [
    {
      quote:
        "You can judge a man’s true character by the way he treats his fellow animals.",
      name: "Madhusudan Tripathi",
      designation: "Frontend Developer",
      src: profile,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Saiyam Dubey",
      designation: " Backend Developer",
      src: "https://avatars.githubusercontent.com/u/70647163?v=4",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Divyanshu Sharma",
      designation: "UI/Resource",
      src: sharma,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}


export default Team;