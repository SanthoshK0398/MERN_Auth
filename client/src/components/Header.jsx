import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import logo from '../assets/2.svg';
import kalasam from '../assets/1.svg';
import pattern from '../assets/pattern.svg';
import bigFlower from '../assets/bigFlower.svg';
import arrow from '../assets/arrow.svg';
// import { Testimonial } from '../assets/jsFile/Testimonial';
// import { Service } from '../assets/jsFile/Service';

const Header = () => {

  const {userData} = useContext(AppContext)
  
  return (
   <>
   
     <div className="relative bg-[#FFE9BA] min-h-screen overflow-x-hidden">
      
      {/* home centre logo and text */}
      <div className="flex flex-col items-center justify-center mt-20 ">
        <img src={logo} alt='logo' className="w-60 sm:w-90 z-10"/>
        <div className="text-[11px] font-medium sm:text-xl sm:font-normal flex flex-col items-center">
          <h2 className='font-bold text-lg'>Best in Class Pooja Services as per Vedic Standards with</h2>
          <h2 className='font-bold text-lg'>Quality Pooja Materials delivered at your Door-Step</h2>
          <p className='mt-4'>Welcome {userData? userData.name : 'Developer'}</p>
        </div>
        
        {/* kalasam image and text */}
        <div className="flex flex-col items-center justify-center mt-6">
          <img src={kalasam} alt='kalasam' className="relative w-35  mb-8"/>
          <h2 className="absolute top-95 text-[15px] sm:text-[20px] sm:top-120 font-black text-lg mb-2">500+ Poojas Performed</h2>
        </div>
      </div>

      {/* contact me */}
      <div className="flex items-center justify-center">
        <button className="group flex gap-1 relative mx-auto overflow-hidden px-5 py-2 rounded-3xl text-[#FFE9BA] bg-[#BC1907] transition-colors duration-300">
            <span className="z-10">Contact Me</span>
            <img src={arrow} alt='arrow' width={20} className="duration-600 group-hover:translate-x-1 z-20"/>
        </button>
      </div>
      

      {/* Corrected pattern positioning */}
      <div className="absolute top-0 left-[-180] md:left-0  pointer-events-none select-none -translate-x-1/3 z-[10] mt-20">
        <img src={pattern} alt='bg pattern' className="opacity-50 w-150 md:w-155 lg:w-180"/>
      </div>
      <div className="absolute top-0 right-[-180] md:right-0 pointer-events-none select-none translate-x-1/3 mt-20">
        <img src={pattern} alt='bg pattern' className="opacity-50 w-150 md:w-155 lg:w-180"/>
      </div>


      {/* Corrected flower positioning */}
      <div>
        <img src={bigFlower} alt='flower' width={200} className="absolute top-0 right-[-30px] lg:right-[100px] xl:right-[300px] pointer-events-none select-none transform origin-top animate-swing"/> 
      </div>
      <div >
        <img src={bigFlower} alt='flower' width={200} className="absolute top-0 left-[-30px] lg:left-[100px] xl:left-[300px] pointer-events-none select-none transform origin-top animate-swing" /> 
      </div>

      {/* service component */}
      <div className="z-10">
        {/* <Service/> */}
      </div>
     

      {/* */}
      <div className="mt-15"> 
        {/* <Testimonial /> */}
      </div>

      

    </div>
   </>
    

  )
}

export default Header