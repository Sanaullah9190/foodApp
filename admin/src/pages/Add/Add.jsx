import React, { useEffect, useState } from 'react'
import { assets, url } from '../../assets/assets'
import './Add.css'
import axios  from 'axios'
import {toast} from 'react-toastify'

function Add({url}) {

  const [name , setName] = useState()
  const [description , setDescription] = useState()
  const [price , setPrice] = useState()
  const [category , setCategory] = useState()
  const [file , setImage] = useState()

  
  

  const onSubmitHandler = async(event)=>{
    event.preventDefault();

    const formData = new FormData()
    formData.append('name',name)
    formData.append('description',description)
    formData.append('price',price)
    formData.append('category',category)
    formData.append('file',file)
  
    // console.log(file);
    const btn = document.getElementById("add-btn")
    btn.style.cursor ='progress';
    btn.style.backgroundColor= 'tomato';
    
    
    const responce = await axios.post(`${url}/api/food/add`,formData)

    // console.log(responce.data.success);

    if(responce.data.success){
      toast.success(responce.data.massage)
      setTimeout(() => {
        window.location.reload()
        
      }, 4000);
      btn.style.cursor= "pointer"
      
    }else{
      toast.error(responce.data.massage)
      
    }

  
  }

  


  return (
    <div className='add'>

      <form className=' flex-colm' onSubmit={onSubmitHandler}>

        <div className='add-image-upload flex-colm'>
          <p>Upload Image</p>
          <label  htmlFor="image">
            <img  src={file?URL.createObjectURL(file):assets.upload_area} alt="" />
          </label>
          <input required onChange={(e)=>setImage(e.target.files[0])} type="file" name="image" id="image" />
        </div>

        <div className="add-product-name flex-colm">
          <p>Product Name</p>
          <input required onChange={(e)=>setName(e.target.value)} className=' outline-none shadow-lg p-2 shadow-slate-300 rounded-md' type="text" name="name" id="" placeholder='type here' />
        </div>

        <div className="product-description flex-colm" >
          <p>Product decription</p>

          <textarea required onChange={(e)=>setDescription(e.target.value)}  className=' outline-none shadow-lg p-2 shadow-slate-300 rounded-md' name="description" raw="6" id="" placeholder=' write description here'></textarea>
        </div>

        <div className="add-catogary-price">

          <div className="add-category flex-colm">
            <p>Product category</p>
            <select onChange={(e)=>setCategory(e.target.value)} className=' outline-none shadow-lg p-2 shadow-slate-300 rounded-md' name="category" id="">
              <option  value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-colm">
            <p>Product Price</p>
            <input required onChange={(e)=>setPrice(e.target.value)}  className=' outline-none shadow-lg p-2 shadow-slate-300 rounded-md' type="text" name="price" id="" placeholder='$10' />
          </div>
        </div>

        <button
        type='submit' className="add-btn" id='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add