import React from 'react'
import { menu_list } from '../../assets/assets'
import "./Menu.css"

function Menu({category , setCatogary}) {
  return (
    <div className=' flex flex-col gap-5' id='explore-menu'>
        <h1 className=' flex justify-center items-center font-bold text-2xl'> Explore Our Menu</h1>

        <p className=' text-gray-500 font-semibold font-xl'>Choose from a diverse menue featuring a delectable array of dishes craft with the  finest ingredients and culinaryexpertis <br />Our mission is to satisfying your craving and elevate your dining experiance , one delicious meal at a time.</p>

        <div className='flex justify-between items-center gap-7 m-5 overflow-x-scroll md:overflow-y-scroll scroll '>
            {menu_list.map((item,index)=>{
                
                return(
                    <div onClick={()=>setCatogary(prev=> prev ===item.menu_name?"All":item.menu_name)} key={index}>
                        <img 
                            className={ `${category===item.menu_name?"active":""} w-28 max-w-28 cursor-pointer rounded-full`}
                            src={item.menu_image} 
                            alt="menu" />
                        <p
                            className='mt-3 text-gray-400 text-xl cursor-pointers text-center'
                            >
                            {item.menu_name}</p>
                    </div>
                    
                    
                )
            })}
        </div>
        <hr className='m-2 h-1 bg-slate-200 border-none' />
    </div>
  )
}

export default Menu