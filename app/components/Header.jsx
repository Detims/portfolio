import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { motion } from "motion/react"

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Software Engineer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

        {/* Profile Icon and Introduction */}
        <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
            <Image src={assets.tororo} alt='' className='rounded-full w-32' />
        </motion.div>

        <motion.h3 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Nhan Nguyen
        </motion.h3>

        {/* Text Cycler */}
        <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            <span ref={el} className='font-Ovo'/>
        </motion.h1>

        {/* Edit description until I come up with something better */}
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
            I am a university student studying Computer Science at CSULB. I am aspiring to become
            a full-stack developer. 
        </motion.p>

        {/* Contact Redirect and Resume Download */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
                Contact Me<Image src={assets.arrow_right} alt='' className='w-4' />
            </motion.a>

            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            href="/resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                My Resume<Image src={assets.download} alt='' className='w-4' />
            </motion.a>
        </div>
    </div>
  )
}

export default Header
