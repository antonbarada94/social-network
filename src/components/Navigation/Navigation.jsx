import React from 'react';
import './Navigation.css';

const Navigation = () => {
   return (
      <nav className='navigation'>
         <div>
            <a>Profile</a>
         </div>
         <div>
            <a>Messages</a>
         </div>
         <div>
            <a>News</a>
         </div>
         <div>
            <a>Music</a>
         </div>
         <div>
            <a>Settings</a>
         </div>
      </nav>
   );
}

export default Navigation;