import React, { useState } from 'react';
import './style.css';

const Allteamsadmin = ({ onViewTeamDetailsAdmin }) => {
  const teams = [
    { id: 1, name: 'Team - A' },
    { id: 2, name: 'Team - B' },
    { id: 3, name: 'Team - C' },
    { id: 4, name: 'Team - D' },
    { id: 5, name: 'Team - E' },
    { id: 6, name: 'Team - F' },
    { id: 7, name: 'Team - G' },
    { id: 8, name: 'Team - H' },
    { id: 9, name: 'Team - I' },
  ];

  const handleTeamClick = (teamId) => {
    console.log(`Clicked on Team ${teamId}`);
   };

  return (
    <>
      <div className="rect7">
        <h1 className="sign-up-text">All Teams</h1>
        <div className="team-boxes">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-box"
            onClick={() => handleTeamClick(team.id)}
          >
            {team.name}
          </div>
        ))}
      </div>
        <button
          className="button1"
          type="submit"
          onClick={onViewTeamDetailsAdmin}
          style={{ marginTop: '30px' }}
        >
          VIEW TEAM
        </button>
      </div>
      
      <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </>
  );
};
export default Allteamsadmin;
