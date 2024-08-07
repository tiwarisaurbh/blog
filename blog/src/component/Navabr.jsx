import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars, FaDribbble, FaFacebook, FaTwitter} from "react-icons/fa6";
import Modal from '../component/Modal'
const Navabr = () => {

  // state changes  fron reactjs
  
  const[isMenuOpen,setIsMenuOpen]=useState(false)

  const [isModalOpen,setModalOpen]=useState(false);

  const togglMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
   const navItems=[
    {path:"/",link:"Home"},
    {path:"/services",link:"Service"},
    {path:"/blogs",link:"Blog"},
    {path:"/contact",link:"Contact"},
    {path:"/about",link:"About"},

   ]
   const openModal=()=>{
    setModalOpen(true);
   }
   const closeModal=()=>{
    setModalOpen(false);
   }



  return (
   <header  className='bg-black text-white fixed top-0  left-0 right-0'>
    <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
    <a href='/' className='text-xl font-bold text-white'>Design
    <span className='text-orange-500'>Dk</span></a>

    {/* {navitems for lg device} */}


     <ul className='flex gap-12 text-lg'>
      {
        navItems.map(({path,link})=>
        <li  className='text-white' key={path}>
          <NavLink to={path}>{link}</NavLink>
        </li>
        )
      }
     </ul>

     {/* {menu icons btn display screen} */}


    <div className='text-white flex gap-4 items-center'>
      <a href='/' className='hover:text-orange-500'><FaFacebook/></a>
      <a href='/' className='hover:text-orange-500'><FaDribbble/></a>
      <a href='/' className='hover:text-orange-500'><FaTwitter/></a>
     <button onClick={openModal} className='bg-orange-500  px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
    </div>

    <Modal isOpen={isModalOpen} onClose={closeModal}/>

    <div className='md:hidden'>
      <button  onClick={togglMenu}className='cursor-pointer'>
        
        {
          isMenuOpen?<FaBars className='w-5 h-5'/>:<FaBars className='w-5 h-5'/>

        }
      
      </button>
    </div>
    
    </nav>
    <div>
    <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen?"fixed top-0  left-0 w-full transition-all ease-out duration-150 ":"hidden"}`}>
      {
        navItems.map(({path,link})=>
        <li  className='text-black' key={path}>
          
          <NavLink

                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
        </li>
        )
      }
     </ul>
    </div>
   </header>

  
  )
}

export default Navabr