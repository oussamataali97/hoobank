import React from 'react'
import Button from './Button'

const Service = () => {
  return (
    <section className='bg-black-gradient-2 text-white rounded-[20px] my-9 flex flex-col md:flex-row items-center p-6 md:px-16 py-9 text-center md:text-start justify-between '>
        <div className="flex-1">
            <p className='text-[48px] font-medium '>Let’s try our service now!</p>
            <p className='paragraph max-w-[450px] py-5'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="btn md:mr-10">
        <Button styles='rounded-[10px]'/>

        </div>
    </section>
  )
}

export default Service