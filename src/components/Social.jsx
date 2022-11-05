import React from 'react'
import { socialMedia } from '../constants/constants'

const Social = () => {
  return (
    <section className='border-t-2 border-[#3F3E45] py-5 text-white flex justify-between'>
        <p className='flex-1 text-[13px] sm:text-[18px]  '>Copyright 2021 HooBank. All Rights Reserved.</p>
        {
            socialMedia.map((media,index)=>(
                <a href={media.link} className='mr-2 sm:mr-6 hover:bg-blue-300 hover:p-1 rounded-full flex justify-center items-center' ><img src={media.icon} alt="" /></a>
            ))
        }
    </section>
  )
}

export default Social