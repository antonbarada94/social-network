import React from 'react';
import './Navigation.css';

const Navigation = () => {
   return (
      <nav className='navigation'>
         <div className = 'active'>
            <a href = '/profile'>Profile</a>
         </div>
         <div>
            <a href = '/dialogs'>Messages</a>
         </div>
         <div>
            <a href = '/news'>News</a>
         </div>
         <div>
            <a href = '/music'>Music</a>
         </div>
         <div>
            <a href = '/settings'>Settings</a>
         </div>
      </nav>
   );
}

export default Navigation;