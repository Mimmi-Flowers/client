import React from 'react';
import Specials from '../Specials/Specials';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='Landing-page-container'>
      <div>LandingPage</div>
      <Specials setting='Favorite' />
      <Specials setting='Season' />
    </div>
  );
};

export default LandingPage;