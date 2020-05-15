import React from 'react';
import logo from '../../img/logo.png';
import headerAvatar from '../../img/post_avatar.png'
import './Header.css'

const Header = () => {
   return (
      <header className='header'>
         <img className = 'logo' src = {logo} />
         <img className = 'avatar' src = {headerAvatar} />
      </header>
   );
}

export default Header;