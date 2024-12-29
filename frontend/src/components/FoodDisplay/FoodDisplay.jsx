import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreCotext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodD.css'

function FoodDisplay({category}) {

    const {food_list}  = useContext(StoreContext)

  return (
    <div className='mt-8 ' id='FoodDisplay'>

        <h2 className=' text-2xl font-semibold'> To Dishes Near You</h2>

        <div className=' md:grid md:grid-cols-4 md:mt-8  gap-6 gap-x-8 animation transition-all delay-1000'>

            {food_list.map((item,index)=>{
                
                // {console.log(category);}
                if( category === "All" || category ===item.category){

                    return <FoodItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image}/>
                }
                
                
            })}
        </div>

    </div>
  )
}

export default FoodDisplay