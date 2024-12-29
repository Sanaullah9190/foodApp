import React from 'react'
import {assets} from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar flex justify-between items-center pl-10 pr-10 p-4'>

      <img 
        className=' w-28'
        src={assets.logo} 
        alt="logo" />

      <img 
        className=' w-10'
        src={assets.profile_image} 
        alt="profile-image" />

    </div>
  )
}

export default Navbar