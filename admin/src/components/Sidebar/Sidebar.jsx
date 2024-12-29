import React from 'react'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar w-[16%] min-h-screen border-solid border-2 border-t-0 '>

      <div className='sidebar-options pt-14  flex flex-col gap-5 '>

        <NavLink
          to='/add'
          className={({isActive})=>`sidebar-option flex items-center gap-3 border-2 border-solid border-r-0 p-2 rounded cursor-pointer ${isActive?'bg-orange-100 border-orange-300':""}`}>
          <img src={assets.add_icon} alt="" />
          <p className=' invisible md:visible'>Add item</p>
        </NavLink>

        <NavLink 
          to='/list'
          className={({isActive})=>`sidebar-option flex items-center gap-3 border-2 border-solid border-r-0 p-2 rounded cursor-pointer ${isActive?'bg-orange-100 border-orange-300':""}`}>
          <img src={assets.order_icon} alt="" />
          <p className='invisible md:visible'>List Items</p>
        </NavLink>

        <NavLink 
          to='/order'
          className={({isActive})=>`sidebar-option flex items-center gap-3 border-2 border-solid border-r-0 p-2 rounded cursor-pointer ${isActive?'bg-orange-100 border-orange-300':""}`}>
          <img src={assets.order_icon} alt="" />
          <p className=' invisible md:visible'>Orders Item</p>
        </NavLink>

      </div>

    </div>
  )
}

export default Sidebar