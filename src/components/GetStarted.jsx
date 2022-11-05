import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className='cursor-pointer flex justify-center items-center bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px]  '>
        <div className="flex justify-center flex-col items-center bg-primary w-[100%] h-[100%] rounded-full  ">
            <div className="flex justify-center  items-start flex-row">
                <p className='text-[18px] leading-[23px] font-medium mr-3'>
                    <span className='text-gradient text-[18px] leading-[23px]'>Get</span>
                    
                </p>
                <img src={arrowUp} alt="arrow" />
              
            </div>
            <p className='text-[18px] leading-[23px]'>
                    <span className='text-gradient text-[18px] leading-[23px]'>Started</span>
            </p>
        </div>
    </div>
  )
}

export default GetStarted