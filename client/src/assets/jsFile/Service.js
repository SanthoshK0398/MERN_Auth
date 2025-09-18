'use client';
import React from 'react'
import servicesList from '@/assets/services';
import Image from 'next/image';
import Link from 'next/link';


export const Service = () => {
  return (
    <div className='bg-[#BC1907] w-full py-20 mt-10'>
      <div className='flex flex-col items-center justify-center mx-10 md:mx-20 lg:mx-25 xl:mx-35 mb-5 md:mb-10'>
        <h1 className='text-3xl font-bold text-[#FFE9BA]'>Our Services</h1>
        <h2 className='text-[12px] italic mb-4 text-[#FFE9BA]'>We provide a wide range of services to cater to your spiritual needs.</h2>
      </div>
      
      <div className='grid grid-cols-3 mx-10 gap-5 md:grid-cols-3 md:mx-20 md:gap-10 lg:grid-cols-5 lg:mx-25 lg:gap-10 xl:grid-cols-6  xl:mx-35 items-center justify-center'>
          {servicesList.slice(0,6).map((service, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                  <div className='relative rounded-full border-amber-50 border-2 w-30 md:w-50 lg:w-45 '>
                    <Image src={service.service_image} alt='logo' sizes='96px' className='rounded-full'/>
                  </div>
                  <h2 className=' text-[#FFE9BA] font-bold italic text-[11px] sm:text-[12px] mt-2'>{service.service_name}</h2>
              </div>  
          ))}
      </div>

      {/* view all button */}
      <div className='flex items-center justify-center mt-10'>
            <Link href={"/services"}
            className='px-7 py-2 rounded-full border-2 transition-colors duration-300 ease-in-out text-[#BC1907]
            bg-[#FFE9BA] hover:text-[#FFE9BA] hover:bg-[#BC1907] cursor-pointer'>
              <h2>View all</h2>
            </Link>
      </div>
    </div>
  )
}
