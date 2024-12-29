import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './List.css'
import { toast } from 'react-toastify'


function List({url}) {

  const [list, setList] = useState([])

  const fatchList = async () => {
    const responce = await axios.get(`${url}/api/food/all-food`);
    // console.log(responce.data);
    
    if(responce.data.success){
      setList(responce.data.data)
    }else{
      toast.error(responce.data.massage)

    }

  }


  const removeFood = async(foodId)=>{

    const responce = await axios.post(`${url}/api/food/delete`,{id:foodId})
    await fatchList()

    if (responce.data.success) {
      toast.success(responce.data.massage)
    }else{
      toast.error(responce.data.massage)
    }
    
  }
  useEffect(() => {
    fatchList()
  },[])

  


  return (
    <div className='list flex-colm'>
      <p>All Food List</p>

      <div className='list-table'>

        <div className='list-table-formate title'>
          <b> Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-formate'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p onClick={()=>removeFood(item._id)} className=' cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>


    </div>
  )
}

export default List