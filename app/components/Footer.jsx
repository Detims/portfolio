import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.nozomi : assets.hikari} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.nozomi : assets.hikari} alt='' className='w-6'/>
            example@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Nhan Nguyen. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href='https://github.com/Detims'>GitHub</a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/nhan-nguyen-281a11294/'>LinkedIn</a></li>
        </ul>
      </div> 
    </div>
  )
}

export default Footer
