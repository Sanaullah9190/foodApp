import React from 'react'
import { assets } from '../../assets/assets'

export default function MobileApp() {
  return (
    <div className='flex justify-center items-center flex-col    mt-1 mb-1 md:p-20 p-10' id='app-download'>

        <p className='font-semibold text-xl md:text-4xl text-black mb-1'>For Better Experience Download </p>
        <p className='font-semibold text-2xl md:text-4xl text-orange-600 mb-5'>Tomato App</p>

        <div className='flex justify-center items-center mb-1 gap-3 flex-col md:flex-row  '>

            <img className=' cursor-pointer' src={assets.play_store} alt="play_store" />
            <img className=' cursor-pointer'  src={assets.app_store} alt="app_store" />

        </div>
    </div>
  )
}
