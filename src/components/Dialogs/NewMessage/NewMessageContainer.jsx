import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      newMessageText : state.messagesPage.newMessageText,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageActionCreator());
      },
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text));
      }
   }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;