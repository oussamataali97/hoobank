import React from 'react'
import { apple,google,card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className='flex flex-col md:flex-row-reverse items-center text-white my-8'>
       
        <div className="flex-1  md:px-4 mb-2">
           <img src={card} alt="" className='w-[530px] h-[455px] object-contain ' />
           
        </div>
        <div className="flex-1  mb-2">
            <h1 className=' font-semibold xs:text-[48px] text-[40px]  text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Find a better card deal in few easy steps.</h1>
            <p className=' text-[16px] py-8 paragraph max-w-[450px]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
           <Button/>

        </div>

    </section>
  )
}

export default CardDeal