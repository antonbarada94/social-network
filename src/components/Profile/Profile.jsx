import React from 'react';
import  s from'./Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Userdata from './UserData/UserData';

const Profile = (props) => {
   return (
      <div className = {s.content}>
         <Userdata />
         <MyPostsContainer store = {props.store} />
      </div>
   );
}

export default Profile;