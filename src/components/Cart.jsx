import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../Redux/CartSlice";
import CartCard from "./CartCard";

const Cart = () => {
  const [Total,setTotal]=useState()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
console.log(cart.cartItems);
 
const allclear = () => {
    dispatch(clearCart());
  };
  
  useEffect(() => {
    const totalPrice = cart.cartItems.reduce((p,c) => {
      return p + c.price * c.cartQunty;
    }, 0);
    setTotal(totalPrice)
  }, [cart.cartItems]);
  


  return (
    <div className="=cart-container">
      <h1>Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently Empty</p>
          <div className="start-shopping">
            <Link className="home" to="/">
              Go to Product page
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItems) => (
              
                <CartCard key={cartItems.id} cartItem={cartItems} />
                

            ))}
          </div>

          <div className="cart-summary">
            <button className="clear-cart" onClick={allclear}>Clear Cart</button>
            <div className="sub-total">
              <span className="amount">Subtotal-</span>
              <span className="amount">${Number(Total).toFixed(2)}</span>
              <p className="para">Taxes and shipping calculated at</p>
              <button className="check-out">Check Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
