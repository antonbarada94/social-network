import React from 'react';
import './NewMessage.css';
import currentUserAvatar from '../../../img/post_avatar.png';

const NewMessage = (props) => {

   let addMessage = () => {
      props.addMessage();
   }

   let onMessageChange = (e) => {
      let text = e.target.value;
      props.updateNewMessageText(text);
   }
   
   return (
      <div className='new-messages'>
         <img src={currentUserAvatar} />
         <div className='new-message'>
            <textarea onChange={onMessageChange} className='new-message-area' placeholder='Message' value={props.newMessageText}></textarea>
            <button className='new-message-button' onClick={addMessage}></button>
         </div>
         <img src={currentUserAvatar} />
      </div>
   );
}

export default NewMessage;