import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreCotext'

function FoodItem({id,name,price,description,image }) {


    const { addToCart,removeFromCart,cartItems,} = useContext(StoreContext)

  return (
    <div className='food-item max-w-full md:m-auto mb-10 rounded-2xl shadow-xl transition delay-300 animate-fade'>
        <div className='image-container relative '>
            <img
                className=' max-w-full rounded-2xl'
                src={image} alt="" />
            {
                !cartItems[id]? <img
                    onClick={()=>addToCart(id)} 
                    className=' w-9 absolute cursor-pointer right-4 bottom-4 rounded-full' 
                    src={assets.add_icon_white} alt='add'/>
                :<div 
                    className='f-i-c absolute bottom-4 right-4 flex items-center gap-3 p-1 rounded-full bg-slate-100'>

                    <img
                        className=' w-6'
                        onClick={()=>removeFromCart(id)} 
                        src={assets.remove_icon_red} 
                        alt="" />

                    <p>{cartItems[id]}</p>

                    <img
                        className=' w-6'
                        onClick={()=>addToCart(id)} 
                        src={assets.add_icon_green} 
                        alt="" />
                </div>
            }

        </div>

        <div className='p-5 '>
            <div className=' flex justify-between items-center mb-3'>
                <p className=' text-xl font-semibold'>{name}</p>
                <img className='w-16' src={assets.rating_starts} alt="" />
            </div>

            <p className='text-gray-800 font-medium text-sm '>
                {description}
            </p>
            <p className=' text-orange-500 font-bold text-xl'>
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem