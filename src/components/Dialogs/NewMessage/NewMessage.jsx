import React from 'react';
import './NewMessage.css';
import currentUserAvatar from '../../../img/post_avatar.png';

const NewMessage = (props) => {
   let newMessageElement = React.createRef();

   let addMessage = () => {
      props.dispatch({ type: 'ADD-MESSAGE' });
   }

   let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text });
   }
   
   return (
      <div className='new-messages'>
         <img src={currentUserAvatar} />
         <div className='new-message'>
            <textarea ref={newMessageElement} onChange={onMessageChange} className='new-message-area' placeholder='Message' value={props.newMessageText}></textarea>
            <button className='new-message-button' onClick={addMessage}></button>
         </div>
         <img src={currentUserAvatar} />
      </div>
   );
}

export default NewMessage;