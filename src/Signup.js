import React, { useState } from 'react';
import './style.css';

const Signup = ({ onSignupSuccess }) => {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSignupSuccessful(true);
    onSignupSuccess();
  };
  return (
    <>
      <div className="rectangle">
        <h1 className="sign-up-text">Sign Up</h1>
        {isSignupSuccessful ? (
          <p>Signup successful</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name here" />
            <label htmlFor="email">Email-ID:</label>
            <input type="email" id="email" name="email" placeholder="Your email here" />
            <label htmlFor="phone">Enter Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Your phone no. here" />
            <label htmlFor="password">Enter Password:</label>
            <input type="password" id="password" name="password" placeholder="******************" />
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="******************"/>
            <button className="button1" type="submit">SIGN UP</button>
          </form>
        )}
      </div>
      <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </>
  );
};
export default Signup;