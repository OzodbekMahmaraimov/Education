import React from 'react'
import SecondPage from './SecondPage';
import FirstPage from './FirstPage';
import ThirdPge from './ThirdPge';
import FourthPage from './FourthPage';
import FifthPage from './fifthPage';

const Footer = () => {
  return (
    <div className='flex  items-center flex-col mt-16'>
        <FirstPage />
        <SecondPage />
        <ThirdPge />
        <FourthPage />
        <FifthPage />
        {/* <CursorTracker /> */}
    </div>
  )
}

export default Footer