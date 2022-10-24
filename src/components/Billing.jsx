import React from 'react'

import { apple,google,bill } from '../assets'


const Billing = () => {
  return (
    <section className='flex flex-col md:flex-row items-center text-white my-8'>
       
        <div className="flex-1  md:px-4 mb-2 relative">
           <img src={bill} alt="" className='w-[530px] h-[455px] object-contain z-[5] ' />
           <div className='absolute top-0 h-[30%] w-[40%] blue__gradient  ' />
           <div className='absolute top-40 left-20  rounded-full z-[0] h-[20%] w-[20%] blue__gradient  ' />
           <div className='absolute top-40 left-10 rounded-full z-[0] h-[90%] w-[80%] pink__gradient  ' />
           <div className='absolute bottom-40 left-10 rounded-full z-[1] h-[20%] w-[90%]  white__gradient  ' />



           
        </div>
        <div className="flex-1  mb-2">
            <h1 className=' font-semibold xs:text-[48px] text-[40px]  text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Easily control your billing & invoicing.</h1>
            <p className=' text-[16px] py-8 paragraph '>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="download flex ">
                <img src={apple} alt="" className='' />
                <img src={google} alt="" className='ml-8' />

            </div>

        </div>

    </section>
  )
}

export default Billing