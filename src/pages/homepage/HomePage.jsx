import React from 'react';
import './HomePage.css';
import DirectoryMenu from '../../components/directory-menu/DirectoryMenu';
import Header from '../../components/header/Header';

function HomePage(){
    return (
       <div>
          <Header />
       <div className='homepage'>
          <DirectoryMenu />
       </div>
       </div>
    );
}

export default HomePage;