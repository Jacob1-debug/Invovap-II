import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='bg-[url("/images/header_background.svg")] h-44 bg-no-repeat bg-cover w-full'>
      <h2 className='text-9xl text-white opacity-10 py-2'>INFO - VAP</h2>
      <p className=' AdventPro_font text-white absolute right-0 top-14 mx-3 text-[28px]'>Get the most reliable information on voting</p>
      <Navbar/>
    </div>
  )
}

export default Header