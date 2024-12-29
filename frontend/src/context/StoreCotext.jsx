import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios'


export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems , setCartItems] = useState({});
    
    const url = "http://localhost:8000"

    const [token , setToken] = useState("")

    const [food_list ,setFood_list] = useState([])

    const addToCart =async(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}})
        }
    }

    const fatchFoodList = async()=>{
        const responce = await axios.get(url+"/api/food/all-food")
        setFood_list(responce.data.data)
        
    }

    const loadCartData = async(token)=>{

        const responce = await axios.post(url+'/api/cart/get',{},{headers:{token}})

        setCartItems(responce.data.data)
        // console.log(responce);
        
        
    }
    
    

    useEffect(()=>{
        
        async function loadData(){
            await fatchFoodList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
        
    },[])

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id ===item)
                totalAmount +=itemInfo.price* cartItems[item]
            }
        }
        return totalAmount
    }



    const contextValue ={
        food_list,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        token,
        url,
        setToken,
        getTotalCartAmount
    }

    return(
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
    )
    
}

export default StoreContextProvider