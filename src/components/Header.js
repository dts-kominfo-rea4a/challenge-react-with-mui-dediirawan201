// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import './Header.css';
// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div className='containerHeader'>
      <h1>Call a Friend</h1>
      <div className='wrapperHeader'>
      <div className='lineLeft' ></div>
      <p className='title'>Your friendly contact app</p>
      <div className='lineRight'></div>
      </div>
    </div>
  );
};

export default Header;
