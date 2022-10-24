import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import AboutUs from './components/AboutUs'
import Founders from './components/Founders'
import Companies from './components/Companies'
import Service from './components/Service'
import Footer from './components/Footer'
import Social from './components/Social'
const App = () => 
    <div className='bg-primary w-full overflow-hidden  font-poppins'>
      <div className=" w-full px-6 sm:px-16 flex justify-center items-center">
        <div className=" xl:max-w-[1280px] w-full">
          <Navbar/>
        </div>
      </div>
      <div className=" bg-primary w-full  flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full  px-6 sm:px-16">
          <Hero/>
        </div>
      </div>

      <div className="bg-primary  px-6 sm:px-16  w-full  flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <AboutUs/>
          <Founders/>
          <Companies/>
          <Service/>
          <Footer/>
          <Social/>
        </div>
      </div>
    </div>
  


export default App