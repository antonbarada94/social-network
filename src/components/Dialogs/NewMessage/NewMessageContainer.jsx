import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {

   let state = props.store.getState();

   let addMessage = () => {
      props.store.dispatch(addMessageActionCreator());
   }

   let onMessageChange = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text));
   }
   
   return ( <NewMessage addMessage = {addMessage} updateNewMessageText = {onMessageChange} newMessageText = {state.messagesPage.newMessageText} /> );
}

export default NewMessageContainer;