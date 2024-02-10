import React from 'react'

const Most = ({icon, text}) => {
  return (
    <div className='bg-mostBg h-[4rem] px-4 flex items-center justify-between rounded-lg'>
      <div className='flex gap-3'>
        <img className='w-iconW' src={icon} alt="sdfgh" />
        <h4 className='text-white'>{text}</h4>
      </div>
      <button className='bg-tugmaColor text-tugmaText p-2 rounded-lg active:scale-90'>
      <svg xmlns="http://ww w.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 24L24 8" stroke="#FFC27A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 8H24V21" stroke="#FFC27A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </button>
    </div>
  )
}

export default Most