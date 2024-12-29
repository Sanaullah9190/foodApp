import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import "./Login.css"
import {StoreContext} from '../../context/StoreCotext'
import axios from 'axios'
import {toast} from 'react-toastify'


export default function Login({setShowLogin}) {

    const {url,setToken} = useContext(StoreContext)

    const [curentState, setCurentState] = useState("login")

    const [data,setdata] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangehandel = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setdata(data=>({...data,[name]:value}))
    }

    const onLogin = async(event)=>{
        event.preventDefault()

        let newUrl = url

        if(curentState ==="login"){
            newUrl += "/api/users/login"
        }else{
            newUrl += "/api/users/register"
        }

        const responce = await axios.post(newUrl,data)
        
        if(responce.data.success){
            setToken(responce.data.token)
            setShowLogin(false)
            localStorage.setItem("token",responce.data.token)
            
            
            if(newUrl =="/api/users/login"){
                toast.success("login successfull")
                
                
            }else{
                toast.success(responce.data.massage)
            }
            
        }
        else{
            alert(responce.data.massage)
        }
        setTimeout(()=>{
            window.location.reload()
        },2000)
        
        
    }



  return (
    <div className="login">
        <form onSubmit={onLogin} className=' login-container' >

            <div className=' flex justify-between items-center text-black'>
                <h2 className=' text-xl font-semibold underline'>{curentState}</h2>

                <img 
                    className='w-4 cursor-pointer hover:w-6 duration-200 rounded-md'
                    onClick={()=>setShowLogin(false)} 
                    src={assets.cross_icon} 
                    alt="cross_icon" />
            </div>
            <div 
                className='input flex flex-col w-full  p-2 text-sm gap-5 '>
                {curentState ==="login"?<></>
                :
                <input 
                    onChange={onChangehandel} value={data.name}
                    className=' p-2 outline-none border shadow-sm shadow-gray-300  rounded-lg' 
                    type="text" 
                    name="name" 
                    placeholder='Your Name' 
                    required />}
                
                <input 
                    className=' p-2 outline-none border shadow-sm shadow-gray-300  rounded-lg'
                    type="email" 
                    name="email"
                    onChange={onChangehandel} value={data.email} 
                    placeholder='email' 
                    required />

                <input 
                    className=' p-2 outline-none border shadow-sm shadow-gray-300  rounded-lg'
                    type="password" 
                    name="password" 
                    onChange={onChangehandel} value={data.password}
                    placeholder='password' 
                    required />

            </div>

            <button 
                type='submit'
                className="bg-orange-600 text-xl font-medium text-white p-2 rounded-sm hover:bg-orange-400 duration-300">
                {curentState ==="sign up"?"create account":"login"}
            </button>
            

            <div>
                <input 
                    className='ml-1 mt-1'
                    type="checkbox" 
                    required  
                    id='checkbox' />

                <label 
                    htmlFor="checkbox" > 
                        By condition , i agree to the terms of use & privecy policy
                        </label>
            </div>

            {curentState === "login"
            ?<p> Create new account? <span className='text-orange-400 font-medium cursor-pointer underline' onClick={()=>setCurentState("sign up")}>Click Here</span></p>
            :<p>Alredy have an account? <span className='text-orange-400 font-medium cursor-pointer underline' onClick={()=>setCurentState("login")}>login Here</span></p>
            }
            
            
        </form>
    </div>
  )
}
