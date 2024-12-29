import React from 'react'
import { assets } from '../../assets/assets'

export default function Footer() {
  return (
    <div className='footer flex justify-center items-center flex-col bg-gray-800 text-white md:gap-5 gap-2 md:p-20 p-10 md:pt-20 pt-10' id='footer'>

        <div className=' w-full grid md:grid-cols-3 gap-20 grid-rows-1'>

            <div className='flex justify-center md:items-start items-center md:gap-5 gap-2 flex-col '>
                <img 
                    src={assets.logo}
                    alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate iusto itaque modi necessitatibus fugiat beatae, molestias natus maiores esse?</p>
                    <div className=' flex justify-between items-center gap-5 cursor-pointer text-xl'>
                        <img src={assets.facebook_icon} alt="facebook_icon" />
                        <img src={assets.twitter_icon} alt="twitter_icon" />
                        <img src={assets.linkedin_icon} alt="linkedin_icon" />
                    </div>
            </div>

            <div className='f-c-c flex justify-center items-center gap-5 flex-col'>
                <h2 className=' font-semibold text-2xl'>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy </li>
                </ul>
            </div>

            <div className='f-c-r flex justify-center items-center gap-5 flex-col'>
                <h2 className='font-semibold text-2xl'>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8356078234</li>
                    <li>contact@Tomato.com</li>
                </ul>
            </div>
        </div>
        <hr  className='w-full p-1 text-gray-500 mt-1 mb-1'/>
        <p>Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}
