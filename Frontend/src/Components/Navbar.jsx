import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Savings from './Savings';
import Team from './Team';
import AboutUs from './AboutUs';
import Adopt from './Adopt'

const Navbar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  const close_mobile_drawer = () => {
    setMobileDrawerOpen(false)
  }

  return (
    <nav className='hell top-0 z-50 sticky max-w-screen'>
      <div className='font-bold text-neutral-800'>
        <div className="bg-teal-500 flex justify-around items-center py-3 lg:px-20 px-10">

          <div className="flex items-center">
            <img src={logo} alt="logo" className='h-16 w-16 rounded-full' />
            <a href="#" className='ml-5 text-xl lg:text-2xl'>Astitva<span className='text-white'>4</span>Animals</a>
          </div>


          <div className="hidden lg:flex list-none">
            <ul className='flex text-xl gap-10'>
              <li><Link to="/" className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Home</Link></li>
              {/* <li><Link to="/team" className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Team</Link></li> */}
              {/* <li><Link to="/savings" className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Savings</Link></li> */}

              <li><Link to="/shelters" className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Shelters</Link></li>
              <li><Link to="/adopt" className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Pet Shops</Link></li>
              <li><Link to="/adopt" className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Vets</Link></li>
              <li><Link to="/aboutus" className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>About Us</Link></li>

              {/* <li><a href='#' className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Home</a></li>
              <li><a href='#team' className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Team</a></li>
              <li><a href='#savings' className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Savings</a></li>
              <li><a href='#adopt' className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Adopt</a></li>
              <li><a href='#aboutus' className='p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>About Us</a></li> */}
            </ul>
          </div>

          <div className="hidden lg:flex gap-5 text-xl">
            <ul className='flex text-xl gap-10'>
              <li><Link to="/login" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white'>Login</Link></li>
              <li><Link to="/signup" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white'>SignUp</Link></li>
            </ul>
            {/* <a href="" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white'>Login</a>
            <a href="" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white'>SignUp</a> */}

          </div>

          <div className="lg:hidden block right-0">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X></X> : <Menu></Menu>}
            </button>
          </div>
          {
            mobileDrawerOpen && (
              <div className="top-[87px] fixed right-0 z-20 bg-neutral-900 h-screen w-1/2 py-10 md:w-1/3 ml-4 rounded-xl flex flex-col justify-start items-start
              lg:hidden list-none">
                <ul className='flex text-bold text-xl flex-col text-white'>
                  <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Home</Link></li>
                  <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/team" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Team</Link></li>
                  <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/savings" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Savings</Link></li>
                  <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/adopt" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Adopt</Link></li>
                  <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/aboutus" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>About Us</Link></li>

                  {/* <li className='mb-8 ml-8 link'><a href='#' onClick={close_mobile_drawer} className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Home</a></li>
                  <li className='mb-8 ml-8 link'><a href='#team' onClick={close_mobile_drawer} className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Team</a></li>
                  <li className='mb-8 ml-8 link'><a href='#savings' onClick={close_mobile_drawer} className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Savings</a></li>
                  <li className='mb-8 ml-8 link'><a href='#adopt' onClick={close_mobile_drawer} className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Adopt</a></li>
                  <li className='mb-8 ml-8 link'><a href='#aboutus' onClick={close_mobile_drawer} className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>About Us</a></li> */}
                </ul>
                <div className="flex flex-col gap-5 text-xl mt-7 lg:mt-0 ml-14">
                  <ul>
                    <li className='mb-10' onClick={close_mobile_drawer}><Link to="/login" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white mt-12'>Login</Link></li>
                    <li className='mb-10' onClick={close_mobile_drawer}><Link to="/signup" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white mt-12'>SignUp</Link></li>
                  </ul>

                </div>
              </div>

            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
