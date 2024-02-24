import React from 'react'
import button from './images/Polygon 4.png'
import girl from './images/girl.png'
import stars from './images/stars.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ image, job }) => {
  return (
    <div>
      <div className="mx-auto max-w-sm overflow-hidden border border-gray-200 rounded-lg shadow dark:bg-testimonial dark:border-gray-700">
        {/* <img className="rounded-t-lg cursor-pointer duration-300 hover:scale-105" src={image} alt="laptop 1" /> */}
        <LazyLoadImage effect='blur' className='rounded-t-lg cursor-pointer' src={image} alt='laptops' />
        <div className="p-5 flex flex-col gap-5">
          <div className='w-100 flex text-testimonialText justify-between'>
            <div className='flex items-center gap-3'>
              <button className='bg-tugmaColor p-3 rounded-full'><img src={button} alt="buttondagi_Imgae" /></button>
              <p>10x Lesson</p>
            </div>
            <div className=''>
              <h5 className='py-2 px-5 rounded-[2.5rem] bg-cardDesign'>{job}</h5>
            </div>
          </div>
          <h1 className='text-2xl text-white text-center'>Python for Financial Analysis Next
            and Algorithmic Trading</h1>
          {/* <hr className="h-[1px] border-0 bg-chiziq opacity-50" /> */}
          <div className='w-100 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img className='cursor-pointer' src={girl} alt="girl-img" />
              <h1 className='text-md text-white'>Adam Smith <br /><span className='text-sm text-testimonialText'>Python Developer</span></h1>
            </div>
            <p className='text-testimonialText'>50+ Student</p>
          </div>
          {/* <hr className="h-[1px] border-0 bg-chiziq opacity-50" /> */}
          <div className='flex justify-between items-center pb-2'>
            <img src={stars} alt="stars" />
            <p className='text-testimonialText underline decoration-1 cursor-pointer' >Enroll Now</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card