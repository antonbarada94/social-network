import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <nav className='navigation'>
         <div>
            <NavLink to = '/profile'>Profile</NavLink>
         </div>
         <div>
            <NavLink to = '/dialogs'>Messages</NavLink>
         </div>
         <div>
            <NavLink to = '/projects'>Projects</NavLink>
         </div>
         <div>
            <NavLink to = '/music'>Music</NavLink>
         </div>
         <div>
            <NavLink to = '/settings'>Settings</NavLink>
         </div>
      </nav>
   );
}

export default Navigation;