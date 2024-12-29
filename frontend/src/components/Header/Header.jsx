import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className=' header'>
        <div className=' contente absolute  flex-col items-start gap-5  md:max-w-screen-lg md:bottom-36 bottom-4 md:left-24 left-6'>

            <h2 className=' md:font-bold font-semibold text-white md:text-5xl text-xl md:mb-5'>Order Your <br />favourite food here</h2>

            <p className='text-xl text-white hidden md:block  md:mb-5'>Choose from a diverse menue featuring a delectable array of dishes craft with the  finest ingredients and culinaryexpertis .Our mission is to satisfying your craving and elevate your dining experiance , one delicious meal at a time.</p>

            <button className='p-1 md:text-xl text-sm font-bold  border-1 hover:bg-slate-300 border-gray-600 border-solid rounded-xl bg-slate-200 outline-none '>
                View Menue
            </button>
        </div>
    </div>
  )
}

export default Header