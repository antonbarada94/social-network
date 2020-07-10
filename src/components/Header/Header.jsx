import React from 'react';
import logo from '../../img/logo.png';
import headerAvatar from '../../img/post_avatar.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className='header'>
         <img className = 'logo' src = {logo} />
         {props.isAuth ? 
            <img className = 'avatar' src = {headerAvatar} /> 
            : <NavLink  to = {'/login'} className = 'login' >Login</NavLink>}
      </header>
   );
}

export default Header;