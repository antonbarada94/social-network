import React from 'react';
import  s from'./Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import UserDataContainer from './UserData/UserDataContainer';

const Profile = (props) => {
   return (
      <div className = {s.content}>
         <UserDataContainer store = {props.store} />
         <MyPostsContainer store = {props.store} />
      </div>
   );
}

export default Profile;