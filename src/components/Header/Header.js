import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='App-Header'>
      <a className='Header-title' href='/'>Mimmi Flowers</a>
      <ul className='Header-sections'>
        <a className='Section-list' href='/Flowers'>Flowers</a>
        <a className='Section-list' href='/Cart'>Cart</a>
        <a className='Section-list' href='/Contact'>Contact</a>
        <a className='Section-list' href='/AboutUs'>About us</a>
      </ul>
    </div>
  );
};

export default Header;