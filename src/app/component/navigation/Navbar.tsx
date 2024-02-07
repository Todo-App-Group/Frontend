'use client'

import React from 'react'
import SignUpButton from '../button/SignUpButton'
import {BsList, BsX} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {
    const handleScroll = () =>{};

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen (!menuOpen);

  return (
    <div>
        <div className='lg:flex lg:justify-between hidden'>
            <div>logo</div>
            <div>items</div>
            <div>
                <SignUpButton/>
            </div>
        </div>
        
        <div className='flex justify-end'>
        <div className="cursor-pointer py-10 lg:hidden">
            <BsList 
            onClick={toggleMenu}
            className="h-8 w-8 text-black  rounded-lg"
            />
        </div>
        </div>

        <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[50%] sm:hidden h-screen bg-red-300 p-10 ease-in-out duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-900"
            }
          >
            <div className="flex w-full items-center justify-end">
              <div onClick={toggleMenu} className="cursor-pointer">
                <BsX className="h-8 w-8 text-red-950" />
              </div>
            </div>
        <div className='lg:hidden'>
            <div>logo</div>
            <div>items</div>
            <div>
                <SignUpButton/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar