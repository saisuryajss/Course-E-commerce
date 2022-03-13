import React from 'react';
import DirectoryMenu from '../../components/directory-menu/DirectoryMenu';
import {HomePageContainer} from './HomePageStyles';

function HomePage() {
   return (
      <HomePageContainer>
         <DirectoryMenu />
      </HomePageContainer>
   );
}

export default HomePage;