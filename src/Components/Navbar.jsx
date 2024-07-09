import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  const close_mobile_drawer= () =>{
    setMobileDrawerOpen(false)
  }

  return (
    <nav className='top-0 z-50 sticky max-w-screen'>
      <div className='font-bold text-neutral-800'>
        <div className="bg-teal-600 flex justify-between items-center py-3 lg:px-20 px-10">

          <div className="flex items-center">
            <img src={logo} alt="logo" className='h-16 w-16' />
            <a href="#" className='ml-5 text-xl lg:text-2xl'>Astitva<span className='text-white'>4</span>Animals</a>
          </div>


          <div className="hidden lg:flex list-none">
          <ul className='flex text-bold text-xl'>
                <li><Link to="/" className='p-6 hover:border hover:p-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Home</Link></li>
                <li><Link to="/team" className='p-6 hover:border hover:p-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Team</Link></li>
                <li><Link to="/savings" className='p-6 hover:border hover:p-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Savings</Link></li>
                <li><Link to="/adopt" className='p-6 hover:border hover:p-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Adopt</Link></li>
                <li><Link to="/aboutus" className='p-6 hover:border hover:p-2 hover:border-black hover:bg-slate-200 hover:rounded-xl hover:scale-50'>About Us</Link></li>
              </ul>
          </div>

          <div className="lg:hidden block right-0">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X></X> : <Menu></Menu>}
            </button>
          </div>
          {
            mobileDrawerOpen && (
              <div className="top-[87px] fixed right-0 z-20 bg-neutral-900 h-screen w-1/2 py-10 md:w-1/3 ml-4 rounded-xl flex  justify-start items-start
              lg:hidden list-none">
                <ul className='flex text-bold text-xl flex-col text-white'>
                    <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Home</Link></li>
                    <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/team" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Team</Link></li>
                    <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/savings" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Savings</Link></li>
                    <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/adopt" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>Adopt</Link></li>
                    <li className='mb-8 ml-8 link'><Link onClick={close_mobile_drawer} to="/aboutus" className='hover:text-black p-6 hover:border hover:p-2 hover:border-teal-300 hover:bg-slate-200 hover:rounded-xl hover:scale-50'>About Us</Link></li>
                  </ul>
              </div>
            )
}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
