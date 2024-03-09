import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, decreaseCart, removeFromCart } from '../Redux/CartSlice'

const CartCard = ({cartItem}) => {
const dispatch=useDispatch()

    
  const handleRemove=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
      }
    
      const handledecrease=(cartItem)=>{
        dispatch(decreaseCart(cartItem))
      }
    
      const handleIncrease=(cartItem)=>{
        dispatch(addToCart(cartItem))
      }

  return (
    <div>
      <div className="cart-item" key={cartItem.id}>
                <div className="=cart-product">
                  <img className='cart-img' src={cartItem.images[2]} alt="" />
                  <div>
                    <h5>{cartItem.title}</h5>
                    <button className="remove-btn" onClick={()=>handleRemove(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price} </div>

                <div className="cart-product-quanitity">
                  <button className="cart-btn" onClick={()=>handledecrease(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQunty}</div>
                  <button className="cart-btn" onClick={()=>handleIncrease(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${Number(cartItem.price * cartItem.cartQunty).toFixed(2)}
                </div>
              </div>
    </div>  
  )
}

export default CartCard
