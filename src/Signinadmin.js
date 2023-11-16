import React, { useState } from 'react';
import './style.css';

const Signinadmin = ({ onViewAllTeamsAdmin }) => {

  return (
    <>
      <div className="rect3">
        <h1 className="sign-up-text">Sign In</h1>
          <form>
            <label htmlFor="email" style={{ marginLeft:'40px'}}>Email-ID:</label>
            <input type="email" id="email" name="email" placeholder="Your email here" style={{ marginLeft:'40px'}}/>
            <label htmlFor="password" style={{ marginLeft:'40px', marginTop: '15px'}}>Enter Password:</label>
            <input type="password" id="password" name="password" placeholder="******************" style={{ marginLeft:'40px'}}/>
            <button className="button1" type="submit" onClick={onViewAllTeamsAdmin} style={{marginTop: '30px'}}>SIGN IN</button>
          </form>
      </div>
      <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </>
  );
};
export default Signinadmin;