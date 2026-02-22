import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <>
    <nav className='text-white w-full flex justify-center items-center px-10 py-5 bg-black'>
      <ul className='flex gap-10 text-2xl font-semibold'>
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>about</NavLink></li>
        <li><NavLink to='/Contect'>Contect</NavLink></li>

      </ul>
    </nav>
    </>
  )
}

export default Navbar