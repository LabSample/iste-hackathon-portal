import React, { useState } from 'react';
import './style.css';

const JoinTeam = ({ onViewTeamDetailsUser }) => {
  const [showForm1, setShowForm1] = useState(true);

  const handleButtonClick = (formNumber) => {
    setShowForm1(formNumber === 1);
  };

  return (
    <>
      <div className="rect4">
        <h1 className="join-text">Join a Team</h1>
        <div className="button-container">
          <button
            className="button3"
            onClick={() => handleButtonClick(1)}
            style={{ background: showForm1 ? 'rgba(39, 165, 239, 0.50)' : '' }}
          >
            REGISTER AS TEAM LEADER
          </button>
          <button
            className="button3"
            onClick={() => handleButtonClick(2)}
            style={{ background: showForm1 ? '' : 'rgba(39, 165, 239, 0.50)' }}
          >
            REGISTER AS TEAM MEMBER
          </button>
        </div>
        <form style={{ display: showForm1 ? 'block' : 'none' }}>
          <div className="input-group">
            <label htmlFor="name" className="join-label">Enter Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name here" className="join" />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="join-label">Email-ID</label>
            <input type="email" id="email" name="email" placeholder="Your email here" className="join" />
          </div>
          <div className="input-group">
            <label htmlFor="teamName" className="join-label">Enter Team Name</label>
            <input type="text" id="teamName" name="teamName" placeholder="Your team name here" className="join" />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber" className="join-label">Enter Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Your phone no. here" className="join" />
          </div>
        </form>
        <form style={{ display: !showForm1 ? 'block' : 'none' }}>
          <div className="input-group">
            <label htmlFor="name" className="join-label">Enter Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name here" className="join" />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="join-label">Email-ID</label>
            <input type="text" id="teamName" name="teamName" placeholder="Your team name here" className="join" />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber" className="join-label">Enter Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Your phone no. here" className="join" />
          </div>
          <div className="input-group">
            <label htmlFor="refcode" className="join-label">Enter The Referral Code</label>
            <input type="text" id="refcode" name="refcode" placeholder="Team Referral Number Here" className="join" />
          </div>
        </form>
        <button className="button1" type="submit" onClick={onViewTeamDetailsUser}>REGISTER</button>
      </div>
      <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </>
  );
};

export default JoinTeam;
