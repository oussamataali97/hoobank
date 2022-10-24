import React from 'react'
import { navLinks } from '../constants/constants'
import {menu,close,logo }from '../assets/'
import { useState } from 'react'

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
return (
    <nav className='flex justify-between w-full navbar items-center py-6 relative z-[19]  '>
        <img src={logo} alt="logo" className='w-[128px] h-[32px] ' />
        <ul className='hidden sm:flex  font-normal  text-[16px] flex-1 justify-end'>
           {navLinks.map((linke,index)=>(
            <li key={linke.id} className={`text-white mr-10 cursor-pointer    ${index ===navLinks.length-1 ? 'mr-0': 'mr-10'}  `}> {linke.title}</li>
           ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center">
            <img src={ toggle ? close : menu } alt="menu"
            onClick={()=>setToggle((prev)=>!prev)}
            />

        <div className={`${toggle  ? 'flex' : 'hidden'}  absolute top-20 right-0 mx-4 p-5 my-2 sidebar min-w-[240px] rounded-xl bg-black-gradient` }>
            <ul className='flex flex-col   items-center flex-1 font-normal  text-[16px] justify-start'>
            {navLinks.map((linke,index)=>(
                <li key={linke.id} className={`text-white mb-5 cursor-pointer    ${index ===navLinks.length-1 ? 'mb-0': 'mb-5'}  `}>{linke.title}</li>
            ))}
            </ul>
            </div>
        </div>


    </nav>
)
}

export default Navbar