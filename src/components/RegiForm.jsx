// Import the React library
import React from "react";

// Import the CSS file for styling
import "./LoginForm.css";

// Define the LoginForm component using a functional component
const LoginForm = () => {
  // Return JSX representing the login form
  return (
    // Outer container for the form
    <div className="FormContainer">
      {/* Inner container for the login form */}
      <div className="loginContainer">
        {/* Header indicating it's a login form */}
        <h2 id='login'>Login Form</h2>

        {/* Input field for email */}
        <input className="input" id='email' type="text" placeholder="Email id" />

        {/* Input field for password */}
        <input className="input" id='password'  type="text" placeholder="Password" />

        {/* Button for submitting the form */}
        <div className="wrap">
          <button className="button">LOGIN</button>
        </div>

        {/* Link for forgot password */}
        <p id='pass'>forgot password ?</p>
      </div>
    </div>
  );
};

// Export the LoginForm component as the default export
export default LoginForm;
