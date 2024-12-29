import React, { useContext, useState } from "react"

import {assets} from "../../assets/assets"
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from "../../context/StoreCotext"
import './Navbar.css'
import {toast} from 'react-toastify'


const Navbar =({setShowLogin})=>{
    const {getTotalCartAmount} = useContext(StoreContext)

const [menu , setMenu] = useState("menu")

const {token,setToken} = useContext(StoreContext)

const navigate = useNavigate()

const logout = ()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate('/')
    toast.success("logout successfull")
    setTimeout(()=>{
        window.location.reload()
    },2000)
}

const order =()=>{
    navigate('/place-order')
}

    return(
        <div className="navbar flex justify-between items-center md:justify-between p-2 md:p-0  ">
            <Link to='/'><img className=" w-24  md:w-40" src={assets.logo} alt="Logo" /></Link>

            <ul className=" hidden gap-2 md:gap-5 text-gray-600  font-semibold list-none  cursor-pointer select-none md:flex ">
                <Link
                    to='/'
                    onClick={()=>setMenu("home")}
                    className={menu==="home"?"active":""}>
                        home
                    </Link>
                <a href="#explore-menu"
                    onClick={()=>setMenu("menu")}
                    className={menu==="menu"?"active":""}>
                        menu
                    </a>
                <a href="#app-download"
                    onClick={()=>setMenu("mobile-app")}
                    className={menu==="mobile-app"?"active":""}>
                        mobile-app
                    </a>
                <a href="#footer"
                    onClick={()=>setMenu("contact-us")}
                    className={menu==="contact-us"?"active":""}>
                        contact-us
                    </a>
            </ul>

            <div className=" flex items-center  gap-5 md:gap-10">
                <img 
                    className="w-6" 
                    src={assets.search_icon} 
                    alt="search-icon" />
                <div className=" relative">
                    <Link to='/cart'>
                        <img
                        className="w-6"
                        src={assets.basket_icon} 
                        alt="Basket-icon" />
                    </Link>
                    <div className={getTotalCartAmount()===0?"":" absolute min-w-3 min-h-3 bg-red-600 top-0 left-7 rounded-xl"}></div>
                </div>

            <div>
                {!token?<button 
                onClick={()=>setShowLogin(true)}
                className=" bg-transparent font-semibold py-1 px-4 border-solid border-2 rounded-xl border-gray-400 outline-none
                hover:bg-gray-300 cursor-pointer transition-all duration-100">
                    login
                </button>
                :
                    <div className="nav-profile">
                        <img src={assets.profile_icon} alt="profile_icon" />
                        <ul className="dropdwon">

                            <li onClick={order}>
                                <img src={assets.bag_icon} alt="" />        <p>orders</p>
                            </li >
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="" />     <p>logout</p>
                                </li>
                        </ul>
                    </div>
                }
                
            </div>

            </div>
        </div>
    )
}

export default Navbar