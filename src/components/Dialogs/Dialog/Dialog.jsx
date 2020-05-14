import React from 'react';
import './Dialog.css'
import { NavLink } from 'react-router-dom';
import dialogAvatar from '../../../img/post_avatar.png'

const Dialog = (props) => {
   let path = '/dialogs/' + props.id;
   return (
      <div className='dialog'>
         <NavLink to={path}>
            <div className = "dialog-data">
               <img src={dialogAvatar}/>
               <div className = "dialog-data-info">
                  <p>{props.name}</p>
                  <p>Message</p>
               </div>
               <div className = "dialog-data-status">
                  <span>22 30</span>
                  <span>10</span>
               </div> 
            </div>
         </NavLink>
      </div>
   );
}

export default Dialog;