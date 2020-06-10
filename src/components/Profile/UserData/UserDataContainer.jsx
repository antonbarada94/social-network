import React from 'react';
import Userdata from './UserData';

const UserDataContainer = (props) => {

   let state = props.store.getState();

   return (<Userdata skills = {state.profilePage.skills} />);
}

export default UserDataContainer;