import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
   return {
      dialogs: state.messagesPage.dialogs,
      messages: state.messagesPage.messages,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;