import React from 'react';
import Userdata from './UserData';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      skills: state.profilePage.skills,
      profile: state.profilePage.profile,
   }
}

const mapDispatchToProps = (dispatch) => {
   
}

const UserDataContainer = connect(mapStateToProps, mapDispatchToProps)(Userdata)

export default UserDataContainer;