'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import testimonial from '@/assets/testimonial';

export const Testimonial = () => {
    const trackRef = useRef(null);            // ✅ no generic type in JS

    useEffect(() => {
      const node = trackRef.current;
      if (!node) return;
        // finding the length of original array buy duplicating twice/
      const singleOgWidth = node.scrollWidth / 2;
      node.style.setProperty('--marquee-width', `${singleOgWidth}px`);
  
      // speed: 0.02 s per pixel        time=distane/speed.
      const secondsPerPixel = 0.02;
      node.style.setProperty('--time', `${singleOgWidth * secondsPerPixel}s`);

      //Observer for smaller device | "ResizeObserver" is used to observe changes in the size of an element.
      const observer = new ResizeObserver(() => {
        if (node){
        const updatedSingleOgWidth = node.scrollWidth / 2;
        node.style.setProperty('--marquee-width', `${updatedSingleOgWidth}px`);
        node.style.setProperty('--time', `${updatedSingleOgWidth * secondsPerPixel}px`);
        }
    }); 

    }, []);

  return (
    <div className='w-full mx-auto p-10 md:p-5 md:px-20 lg:px-32 lg:mt-2 lg:mb-20'>

        {/* testimonial text */}
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-3xl font-bold text-[#BC1907]'>Testimonials</h2>
            <h1 className='text-[12px] italic mb-4'>(Here from our client)</h1>
        </div>
        
       
        {/* ttetimonial cards*/}
        <div  className='overflow-hidden p-1.5'>
            <div ref={trackRef} className='flex gap-3 sm:gap-8 animate-marquee hover:marquee-paused'>
                {[...testimonial, ...testimonial].map((review, index) => (
                    <div key={index} className='relative flex-shrink-0 w-50 px-3 py-5 sm:w-1/2 md:px-10 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/7
                                                rounded-2xl hover:scale-102 transition-transform ease-in-out duration-200 bg-amber-50'>
                        <Image src={review.reviewer_image} alt='profile_image' width={30} className='bg-amber-200 p-1 border border-black rounded-full'/>
                        <h2 className='mt-2 font-bold'>{review.reviewer_name}</h2>
                        <h2 className='text-[12px]'>{review.reviewer_ratings}</h2>
                        <h1 className='border-b-1 mt-2'></h1>
                        <h3 className='text-xs mt-4 italic'>{review.reviewer_coments}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};
