import React, { useContext, useEffect, useState } from 'react'
import {StoreContext} from '../../context/StoreCotext'
import axios from 'axios'
import {assets} from '../../assets/assets.js'
const MyOrder = () => {

  const {token , url} = useContext(StoreContext)
  const [data , setData] = useState([])

  const fatchOrder = async()=>{
    const responce  = await axios.post(url+"/api/order/user-orders",{},{headers:{token}})
    setData(responce.data.data)
    console.log(responce.data);
    
    
  }

  useEffect(()=>{
    if(token){
      fatchOrder()
    }
  },[token])

 


  return (
    <div className='my-order'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
          return(
            <div key={index} className='my-oredrs orders'>
              <img src={assets.parcel_icon} alt="parcel_icon" />
              <p>{order.items.map((item,index)=>{
                if(index === order.items.length-1){
                  return item.name+"X"+item.quantity
                }
                else{
                  return item.name+"X"+item.quantity+","
                }
              })}</p>
              <p>${order.amount}</p>
              <p>items:{order.items}</p>
              <p><span>&#x25cf;</span><b>{order.status}</b></p>
              <button>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrder