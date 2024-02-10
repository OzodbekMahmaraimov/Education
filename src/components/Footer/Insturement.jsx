import React from 'react'
import { styles } from '../util/style'

const Insturement = ({src, text1, text2}) => {
  return (
    <div className='flex gap-4'>
        <button className={`${styles.tugma} flex justify-center items-center rounded-[50%]`}>
            <img className='p-1 px-1 w-[70%]' src={src} alt="...." />
        </button>
        <div>
            <h2 className='text-xl text-white'>{text1}</h2>
            <p className='text-footerPColor text-lg'>{text2}</p>
        </div>
    </div>
  )
}

export default Insturement