import React from 'react';
import './Dialog.css'
import { NavLink } from 'react-router-dom';
import dialogAvatar from '../../../img/post_avatar.png'
import DialogInfo from './DialogInfo/DialogInfo';
import DialogStatus from './DialogStatus/DialogStatus';

const Dialog = (props) => {
   let path = '/dialogs/' + props.id;
   return (
      <div className='dialog'>
         <NavLink to={path}>
            <div className = "dialog-data">
               <img src={dialogAvatar}/>
               <DialogInfo name = {props.name} lastMessage = {props.lastMessage}/>
               <DialogStatus />  
            </div>
         </NavLink>
      </div>
   );
}

export default Dialog;