import React, { useState } from 'react';
import Signup from './Signup';
import RegSuccess from './RegSuccess';
import Signinuser from './Signinuser';
import Jointeam from './jointeam';
import Teamdetailsuser from './Teamdetailsuser';
import Signinadmin from './Signinadmin';
import Allteamsadmin from './Allteamsadmin';
import Teamdetailsadmin from './Teamdetailsadmin';
import SignupSuccesspage from './SignupSuccesspage';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');

  const handleSignupSuccess = () => {
    setCurrentPage('regSuccess');
  };

  const handleViewSignup = () => {
    setCurrentPage('signup');
  };

  const handleViewSignupSuccess = () => {
    setCurrentPage('SignupSuccesspage');
  };

  const handleSignInUser = () => {
    setCurrentPage('signinuser');
  };

  const handleViewJoinTeam = () => {
    setCurrentPage('jointeam');
  };

  const handleTeamDetailsUser = () => {
    setCurrentPage('teamdetailsuser');
  };

  const handleSignInAdmin = () => {
    setCurrentPage('signinadmin');
  };

  const handleAllTeamsAdmin = () => {
    setCurrentPage('allteamsadmin');
  };

  const handleTeamDetailsAdmin = () => {
    setCurrentPage('teamdetailsadmin');
  };

  return (
    <div>
      {currentPage === 'signup' && <Signup onSignupSuccess={handleSignupSuccess} />}
      {currentPage === 'regSuccess' && <RegSuccess onViewSignIn={handleSignInUser} />}
      {currentPage === 'signinuser' && <Signinuser onViewJoinTeam={handleViewJoinTeam} />}
      {currentPage === 'jointeam' && <Jointeam onViewTeamDetailsUser={handleTeamDetailsUser} />}
      {currentPage === 'teamdetailsuser' && <Teamdetailsuser onViewSignInAdmin={handleSignInAdmin} />}
      {currentPage === 'signinadmin' && <Signinadmin onViewAllTeamsAdmin={handleAllTeamsAdmin} />}
      {currentPage === 'allteamsadmin' && <Allteamsadmin onViewTeamDetailsAdmin={handleTeamDetailsAdmin} />}
      {currentPage === 'teamdetailsadmin' && <Teamdetailsadmin onViewSignupSuccess={handleViewSignupSuccess} />}
      {currentPage === 'SignupSuccesspage' && <SignupSuccesspage />}
    </div>
  );
}

export default App;
