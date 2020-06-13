import React from 'react';
import Userdata from './UserData';
import { connect } from 'react-redux';

// const UserDataContainer = (props) => {

//    let state = props.store.getState();

//    return (<Userdata skills = {state.profilePage.skills} />);
// }

const mapStateToProps = (state) => {
   return {
      skills: state.profilePage.skills,
   }
}

const mapStateToDispatch = (dispatch) => {
   
}

const UserDataContainer = connect(mapStateToProps, mapStateToDispatch)(Userdata)

export default UserDataContainer;