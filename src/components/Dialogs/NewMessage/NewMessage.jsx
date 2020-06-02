import React from 'react';
import './NewMessage.css';
import currentUserAvatar from '../../../img/post_avatar.png';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';

const NewMessage = (props) => {
   let newMessageElement = React.createRef();

   let addMessage = () => {
      props.dispatch(addMessageActionCreator());
   }

   let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.dispatch(updateNewMessageTextActionCreator(text));
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