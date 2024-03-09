import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bag from '../assets/bag.png'
import login from '../assets/login.svg'
import { useSelector } from 'react-redux';
const Navbar = () => {
    const [Number, setNumber] = useState(0);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
      const totalProduct = cart.cartItems.length
      setNumber(totalProduct)
    },);

  return (
    <div className='container'>
      <Link className='home' to="/">Home</Link>
      {/* <Link className='FullData' to="FullData">FullData</Link> */}
      {/* <Link className='home' to="/">Product</Link> */}
      
      <div className='cart'>
      {/* <Link className='login' to="LoginForm"><img id='cart-img' src={login} alt="img" /></Link> */}
      <label ><Link className='account' to="Signin">SignIn</Link></label> 
      <label ><Link className='account' to="LoginForm">Login</Link></label> 
    <Link to="Cart"><img id='cart-img' src={bag} alt="img" /></Link>
      <span>{Number}</span>
      </div>
     
    </div>
  )
}

export default Navbar
