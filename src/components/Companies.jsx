import React from 'react'
import { clients } from '../constants/constants'

const Companies = () => {
  return (
    <section className='flex py-6 sm:py-8 justify-around'>
        {
            clients.map((client,index)=>(
                <div className="flex items-center justify-start" key={index}>
                    <img src={client.logo} alt="logo" className='md:max-w-[189px] max-w-[70px] mr-2 md:mr-0 max-h-[60px] ' />
                </div>
            ))
        }
    </section>
  )
}

export default Companies