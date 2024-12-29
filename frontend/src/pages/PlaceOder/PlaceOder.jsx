import React, { useContext, useEffect, useState } from 'react'
import {StoreContext} from "../../context/StoreCotext"
import axios from 'axios'

function PlaceOder() {

  const {
    food_list,
    cartItems,
    token,
    getTotalCartAmount,
    url,} = useContext(StoreContext)

    const [data,setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:""
    })

    const onChangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }

    useEffect(()=>{
      // console.log(data);
      
    },[data])

    const placeOrder = async(event)=>{
        event.preventDefault();
        let orderItem = []
        food_list.map((item)=>{
          if(cartItems[item._id]>0){
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id]
            orderItem.push(itemInfo)
          }
          console.log(orderItem);
          
        })
        let orderData = {
          address:data,
          items:orderItem,
          amount:getTotalCartAmount()+2
        }
        let responce = await axios.post(url+"/api/order/place-order",orderData,{headers:{token}})
        if(responce.data.success){
          const {session_url } = responce.data;
          
          window.location.reload(session_url)
        }
        else{
          alert("error")
        }
        
    }

  return (
    <form action={placeOrder} className='place-order md:flex mt-10 justify-between  '>

      <div className='place-order-left  flex flex-col justify-center p-8'>

        <p className='font-bold mb-2 text-orange-600 text-2xl '>Delivery Imformation</p>
        <div className=''>

          <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder='firstname' />

          <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2 gap-3' type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder='lastname' />
        </div>

        <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='email' />
        <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="text" name= "street" onChange={onChangeHandler} value={data.street} placeholder='street' />

        <div className='multi-field'>
          <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='city' />
          <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='state' />
        </div>

        <div className='multi-field'>
          <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip-code' />
          <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='country' />
        </div>

        <input required className='border-2 border-gray-300 rounded-md outline-none m-2 p-2  gap-3' type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='phone' />
      </div>

      <div className='flex flex-col justify-center w-3/6'>
        <div className='cart-total font-bold text-2xl'>
          <h2 className=' text-orange-600'>Cart Totals</h2>
        </div>
        <div className=' flex justify-between m-2 border-b-2 border-gray-400'>
          <p>Sub Total </p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <div className=' flex justify-between m-2 border-b-2 border-gray-400'>
          <p>Total fee </p>
          <p>${getTotalCartAmount()===0?0:2}</p>
        </div>
        <div className=' flex justify-between m-2 font-semibold'>
          <p>Total </p>
          <p>${getTotalCartAmount()==0?0:getTotalCartAmount()+2}</p>
        </div>
        
        <div className='mt-5'>
          <button className=' bg-orange-500  px-12 py-1 rounded-sm hover:rounded-lg hover:duration-500 text-xl' type='submit' >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOder