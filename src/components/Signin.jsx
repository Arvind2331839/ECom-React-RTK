import React from "react";
import "./LoginForm.css";
const Signin= () => {

  return (
  <div className="FormContainer">
    <div className="loginContainer">
      <h2 id='login'>Sign In</h2>
    <input className="input" id='password'  type="text" placeholder="First Name" />
    <input className="input" id='password' type="text" placeholder="Last Name"/>
    <input className="input" id='password'  type="text" placeholder="Email" />
    <input className="input" id='password'  type="text" placeholder="Mobile" />
    <input className="input" id='password'  type="text" placeholder="Password" />
    <input className="input" id='password'  type="text" placeholder="Confirm Password" />
    {/* <button className="input"id='btn' >LOGIN</button> */}
    <div className="wrap">
      <button className="button">LOGIN</button>
    </div>
    <p id='pass'>forgot password ?</p>
    </div>

  </div>
  )
};

export default Signin;


