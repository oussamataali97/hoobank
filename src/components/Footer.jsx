import React from 'react'
import { footerLinks } from '../constants/constants'
import { logo } from '../assets'

const Footer = () => {

  return (
   <section className='py-6 text-white flex items-start flex-col sm:flex-row'>
    <div className="logos">
        <img src={logo} alt="" className='max-w-[266px]'/>
        <p className='py-3 paragraph'>A new way to make the payments easy, reliable and secure.</p>
    </div>
    <div className="flex justify-around w-full flex-col sm:flex-row ">
        {footerLinks.map((flink,index)=>(
            <div className="right" key={index}>
                <p className=' text-[18px] md:mb-[18px] py-2 '>{flink.title}</p>
                {flink.links.map((sub,index)=>(
                    <a  href={sub.link} className='leading-[24px] flex paragraph mt-2'>{sub.name}</a>
                ))}
                <hr className='my-4 block sm:hidden'/>
            </div>
        ))}
    </div>

    </section>
  )
}

export default Footer