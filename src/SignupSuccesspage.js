import React from 'react';
import './style.css';
import tickImage from './tick.svg';

const SignupSuccesspage = () => {
  return (
    <>
      <div className="rect2">
        <div>
          <h1 className="reg-success-text">Sign Up Successful</h1>
        </div>
        <div>
        <img className="tick-image" src={tickImage} alt="Tick" />
        </div>
      </div>
      <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </>
  );
};

export default SignupSuccesspage;
