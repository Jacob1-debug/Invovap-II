import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className=' bg-[#1A1A1A] text-white AbrilFatface_font text-sm'>
        <ul className='md:flex justify-around md:h-[32px] h-[60px]'>
            <div className='flex items-center justify-center md:gap-14 gap-6'>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/Candidate">CANDIDATES</Link></li>
            </div>
            <div className='flex md:gap-14 gap-4 items-center justify-center md:mt-0 mt-2'>
            <li><Link href="/Interactive">INTERACTIVE</Link></li>
            <li><Link href="/About">ABOUT</Link></li>
            <li><Link href="/Blog">BLOG</Link></li>
            <li className='bg-[#010101] rounded-full p-0.5 px-1 font-sans font-semibold'>EN</li>
            <li><Link href="/Login">LOGIN</Link></li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar