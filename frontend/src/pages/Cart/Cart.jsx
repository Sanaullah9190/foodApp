import React, { useContext , } from 'react'
import { StoreContext } from '../../context/StoreCotext'
import './cart.css'
import {useNavigate} from 'react-router-dom'

function Cart() {

  const { food_list,
    removeFromCart,
    getTotalCartAmount,
    cartItems, } = useContext(StoreContext)

     const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Titles</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p className=' font-bold mb-5'>Total</p>
              <p>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</p>
            </div>
            <button onClick={()=>navigate('/place-order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-promocode">
          <p>if you have promocode enter here</p>
          <div className="cart-promocode-input">
            <input type="text"  placeholder='promocode'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart