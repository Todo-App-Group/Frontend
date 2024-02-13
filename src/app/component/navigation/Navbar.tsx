'use client'

import React from 'react'
import SignUpButton from '../button/SignUpButton'
import {BsList, BsX} from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    const handleScroll = () =>{};

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen (!menuOpen);

  return (
    <div>
        <div className='lg:flex lg:justify-between hidden'>
            <div>
              <div>
                <Image src={'/logo.png'} alt='logo' width={150} height={250}/>
              </div>
            </div>
            <div>
            <div className='flex items-center space-x-10 h-[100px]'>
                <div>Items</div>
                <div>Items</div>
                <div>Items</div>
                <div>Items</div>
                <div>Items</div>
              </div>
            </div>
            <div className='mt-10'>
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
            <div>
            <div className='mt-[-50px] ml-[-30px]'>
                <Image src={'/logo.png'} alt='logo' width={150} height={250}/>
              </div>
            </div>
            <div className='mt-10'>
              <div>
                <div>Items</div>
                <div>Items</div>
                <div>Items</div>
                <div>Items</div>
                <div>Items</div>
              </div>
            </div>
            <div className='mt-[80px]'>
                <SignUpButton/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar