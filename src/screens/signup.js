import React from "react";
import "./signup.css";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="or-text">OR</p>
        <button className="google-btn">
          <FcGoogle className="google-icon" /> Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
