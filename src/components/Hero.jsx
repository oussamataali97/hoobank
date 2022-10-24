import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () => {
    return (
        <section className='flex sm:py-16 py-6 flex-col md:flex-row'>
            <div className="flex-1 justify-center items-start paragraph flex flex-col  ">
                <div className='flex flex-row py-[6px] items-center bg-discount-gradient rounded-[10px] '>
                    <img src={discount} alt="" className='w-[32px] h-[32px]' />
                    <p>20%  {" "}<span className='text-white'> DISCOUNT FOR {" "}</span>  1 MONTH <span className='text-white'>  {" "}  ACCOUNT</span> </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <p className='flex-1 font-semibold text-white ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px]  '>
                        The Next <br className='hidden sm:block' /> {" "}
                        <span className='text-gradient'> Generation </span> {" "}  <br className='hidden sm:block' />

                    </p>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>
                <h1 className='font-semibold text-white ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px]'>
                    Payment Method.
                </h1>
                <p className='paragraph mt-5 max-w-[490px] py-6 md:py-0'>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.
                </p>


            </div>
            <div className='relative flex-1 flex justify-center items-center'>
                <img src={robot} alt="" className='w-[100%] h-[100%]   z-[5]   ' />
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient ' />
                <div className='absolute z-[1] rounded-full w-[80%] h-[80%] bottom-40  white__gradient ' />
                <div className='absolute z-[0] rounded-full w-[50%] h-[50%] bottom-20 right-20   blue__gradient ' />


            </div>
            <div className="ss:hidden flex justify-center items-center">
                <GetStarted/>
            </div>
           

        </section>
    )
}

export default Hero