import React, { useState } from 'react';
import './style.css';

const Teamdetailsuser = ({ onViewSignInAdmin }) => {

  return (
    <>
      <div className="rect5">
        <h1 className="sign-up-text">Team details</h1>
          <form>
            <label htmlFor="name" className="teammem">TEAM LEADER</label>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className="teaminput"/>
            <label htmlFor="email">Email-ID</label>
            <input type="email" id="email" name="email" className="teaminput"/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="teaminput"/>
            <label htmlFor="name" className="teammem">TEAM MEMBER 1</label>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className="teaminput"/>
            <label htmlFor="email">Email-ID</label>
            <input type="email" id="email" name="email" className="teaminput"/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="teaminput"/>
            <label htmlFor="name" className="teammem">TEAM MEMBER 2</label>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className="teaminput"/>
            <label htmlFor="email">Email-ID</label>
            <input type="email" id="email" name="email" className="teaminput"/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="teaminput"/>
            <button className="button1" type="submit" onClick={onViewSignInAdmin} style={{marginTop: '30px'}}>SIGN IN</button>
          </form>
      </div>
      <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </>
  );
};
export default Teamdetailsuser;