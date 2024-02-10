import React from 'react'
import { styles } from '../util/style'
import Most from '../Most'
import Pen from './images/Pen.png';
import Paper from './images/Paper.png';
import Music from './images/Music.png';
import Layers from './images/Layers.png';
import Img_box from './images/Img_box.png';
import Database from './images/Database.png';
import Chart_pin from './images/Chart_pin.png';
import Group from './images/Group 512843.png';

const FirstPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <button className={`${styles.tugma} py-4 px-9 `}>Explore all Courses</button>
      </div>
      {/* Most */}
      <h1 className='text-6xl text-white text-center py-[4rem]'>Most Popular <span className='text-fTextColor'>Category</span> </h1>
      <div className="container xl:w-[79%] sm:w-full grid sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-6">
        <Most icon={Pen} text={'Design'} />
        <Most icon={Layers} text={'Development'} />
        <Most icon={Paper} text={'Professional Dev.'} />
        <Most icon={Img_box} text={'Photography'} />
        <Most icon={Database} text={'Data Science'} />
        <Most icon={Group} text={'Business'} />
        <Most icon={Chart_pin} text={'Marketing'} />
        <Most icon={Music} text={'Music'} />
      </div>
    </>
  )
}

export default FirstPage