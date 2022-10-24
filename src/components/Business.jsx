import React from 'react'
import Button from './Button'
import { features } from '../constants/constants'


const Business = () => {
  return (
    <section className='flex flex-col md:flex-row text-white my-8'>
        <div className="flex-1  mb-2">
            <h1 className=' font-semibold xs:text-[48px] text-[40px]  text-white xs:leading-[76.8px] leading-[66.8px] w-full'>You do the business, we’ll handle the money.</h1>
            <p className=' text-[16px] py-8 paragraph max-w-[480px]'>With the right credit card, you can improve your financial life by building credit, 
                earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button styles='mb-6'/>

        </div>
        <div className="flex-1  md:px-4 mb-2">
            {features.map((feature,index)=>(
               <div className={index === 1 ? ' feature-card flex items-center p-2 rounded-[20px]  ' : `flex items-center my-10 `} key={feature.id}>
                    <div className="bg-dimBlue rounded-full p-4 flex justify-center items-center mr-5">
                    <img src={feature.icon} alt="" className=' object-contain ' />

                    </div>
                    <div className="text">
                    <p> {feature.title} </p>
                    <p className='paragraph '> {feature.content} </p>
                    </div>
            
                

               </div>
            ))}
           
        </div>

    </section>
  )
}

export default Business