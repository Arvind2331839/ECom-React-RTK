import React from "react";
import "./LoginForm.css";
const LoginForm= () => {

  return (
  <div className="FormContainer">
    <div className="loginContainer">
      <h2 id='login'>Login Form</h2>
    <input className="input" id='email' type="text" placeholder="Email id"/>
    <input className="input" id='password'  type="text" placeholder="Password" />
    {/* <button className="input"id='btn' >LOGIN</button> */}
    <div className="wrap">
      <button className="button">LOGIN</button>
    </div>
    <p id='pass'>forgot password ?</p>
    </div>

  </div>
  )
};

export default LoginForm;


