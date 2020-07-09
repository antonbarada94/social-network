import React from 'react';
import Background from './Background';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      userDescription: state.backgroundPage.userDescription,
      profile: state.profilePage.profile,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      
   }
}

const BackgroundContainer = connect(mapStateToProps, mapDispatchToProps)(Background)

export default BackgroundContainer;