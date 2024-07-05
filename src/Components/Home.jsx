import React from 'react'
import Donate from './Donate'
import dog1 from '../assets/dog1.png'
import playdog from '../assets/playdog.png'
import { Link } from 'react-router-dom'
import cow from '../assets/calf.png'
import cat from '../assets/cat1.png'
import mouse from '../assets/mouse.png'
import squirel from '../assets/squirel.png'
const Home = () => {
  return (
    <div className="mt-20 flex flex-col justify-center">
      <div className="text-center">
        <h1 className='text-5xl lg:text-7xl leading-normal'>We Live To <span>Make</span> <span className=' bg-gradient-to-r from-teal-200 to-teal-600 text-transparent bg-clip-text font-bold italic'>"Them Live"</span></h1>
        <p className='text-xl mt-8 leading-normal italic'>Our team is giving their best to support for the existence of these animals.</p>
      </div>
      <div className="md:flex md:justify-center grid grid-cols-2 content-center mt-10">
        <Link className='p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center' to="/donate">Donate Us</Link>
        <Link className='p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center' to="/form">Contact Us</Link>
        <Link className='p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center' to={{pathname: "https://www.instagram.com/astitv4animals"}} rel="noopener noreferrer" >Instagram</Link>
        <Link className='p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center' to={{pathname: "https://chat.whatsapp.com/LWRkPt9XWqCD2LgpOZLB5p"}} rel="noopener noreferrer" >Join Group</Link>
      </div>
      <div className="bottom-0 flex justify-center items-end mt-6  max-w-screen overflow-hidden">
        <img className="left-0 hidden md:flex h-[400px]" src={cow} alt="cow" />
        <img className="hidden md:flex h-[300px] " src={squirel} alt="squirel" />
        <img className="flex lg:h-[500px] lg:w-[500px] h-[350px] absolute md:static bottom-0 -z-10" src={dog1} alt="dog1" />
        <img className="hidden md:flex h-[300px]" src={mouse} alt="cat" />
        <img className="hidden md:flex" src={playdog} alt="playing dog" />
      </div>
    </div>
  )
}

export default Home
