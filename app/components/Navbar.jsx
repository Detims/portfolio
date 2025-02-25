import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  {/* Change box at the top of the screen when scrolled down enough */}
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    {/* Background Image */}

    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        {/*<Image src={assets.hikari_nozomi} alt='' className='w-full' />*/}
    </div>

    {/* Navbar */}

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-stone-900 dark:shadow-white/20" : ""}`}>
          
        {/* Left Icon */}

        <a href="#top">
            <Image src={isDarkMode ? assets.nozomi : assets.hikari} alt="nav-icon" className='w-28 cursor-pointer mr-14'/>
        </a>

        {/* Nav Anchors */}

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About Me</a></li>
            <li><a className='font-Ovo' href="#projects">Projects</a></li>
            <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
        </ul>

        {/* Dark Mode Button */}

        <div className='flex items-center gap-4'>
            <button onClick={() => setIsDarkMode(prev => !prev)}>
              <Image src={isDarkMode ? assets.moon : assets.sun} alt='' className='w-6' />
            </button>

        {/* Other Contact Button */}

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full
            ml-4 font-Ovo dark:border-white/50'>
              Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='contact' className='w-3'/>
            </a>

            <button className='block md:hidden ml-3 ' onClick={openMenu}>
              <Image src={assets.hikari} alt='' className='w-6' />
            </button>
        </div>

        {/* Mobile Menu */}

        <ul ref={sideMenuRef} className='flex md:hiden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
        dark:bg-stone-900 dark:text-white'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.nozomi : assets.hikari} alt='' className='w-5 cursor-pointer' />
          </div>
          
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
