import React from 'react'
import { styles } from '../util/style';

const FourthPage = () => {
  return (
    <div className='container xl:max-w-[1000px] w-full flex md:flex-row gap-10 flex-col mt-[5rem]'>
      <div className='flex flex-col gap-10'>
        <h1 className={`${styles.footerText} sm:text-left text-center`}>
        Join our <span className='text-fTextColor'>world's largest</span> learning platform today
        </h1>
        <p className={`${styles.paragraph} tracking-normal text-white sm:text-left text-center`}>Start learning by registering and get 30 days free trail</p>
      </div>
      <div className='flex flex-col items-center justify-around gap-10'>
        <div>
        <button className={`text-tugmaText duration-300 whitespace-nowrap bg-tugma2 rounded-tugmaRadius active:scale-90 px-[3.5rem] py-5`}>Join as Instructor</button>
        </div>
        <div>
        <button className={`${styles.tugma} px-[4rem] py-5 whitespace-nowrap`}>Join as Student</button>
        </div>
      </div>
    </div>
  )
}

export default FourthPage;