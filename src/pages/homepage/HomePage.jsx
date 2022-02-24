import React from 'react';
import './HomePage.css';
import DirectoryMenu from '../../components/directory-menu/DirectoryMenu';

function HomePage(){
    return (
       <div className='homepage'>
          <DirectoryMenu />
       </div>
    );
}

export default HomePage;