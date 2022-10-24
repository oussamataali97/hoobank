import React from 'react'
import { stats } from '../constants/constants'

const Stats = () => {
  return (
    <div className='text-white flex md:flex-row flex-col pb-16 md:justify-around w-full'>
        {stats.map((stat,index)=>(
           <div className="flex space-x-2 items-center uppercase" key={index}>
             <p className='text-[36px] font-bold  '> {stat.value} </p>
             <p className='text-gradient text-[20px]  '>{stat.title}</p>
             </div>
        ))}
    </div>
  )
}

export default Stats