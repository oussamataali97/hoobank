import React from 'react'
import { feedback } from '../constants/constants'
import { quotes } from '../assets'

const Founders = () => {
  return (
    
    <section className=' text-white py-10 flex flex-col ss:flex-row gap-6 flex-wrap sm:flex-nowrap w-full'>
        {
            feedback.map((feed,index)=>(
                <div className="flex  flex-col feature-card justify-between p-5 rounded-[20px] w-full relative md:max-w-[370px] mx-auto" key={index}>
                    <img src={quotes} alt="" className='w-[42px] mt-6 ' />
                    <p className='py-10 max-w-[600px] md:w-auto '> {feed.content} </p>
                    <div className="profile py-6  flex items-center">
                        <img src={feed.img} alt="" className=' w-[48px] h-[48px] mr-5 ' />
                        <div className="text">
                            <p> {feed.name} </p>
                            <p > {feed.title} </p>
                        </div>
                    </div>
                </div>
            ))
        }

    </section>
  )
}

export default Founders