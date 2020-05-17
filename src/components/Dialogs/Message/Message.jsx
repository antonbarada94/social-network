import React from 'react';
import './Message.css';
import messageAvatar from '../../../img/post_avatar.png'

const Message = (props) => {
   return (
      <div className="message">
         <img src = {messageAvatar}/>
         <div className = 'message-data'>
            <p>{props.name}</p>
            <p>{props.message}</p>
         </div>
         <span>TIME</span>
         
      </div>
   );
}

export default Message;