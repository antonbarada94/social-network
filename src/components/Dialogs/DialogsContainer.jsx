import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

const DialogsContainer = compose (
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs)

export default DialogsContainer;