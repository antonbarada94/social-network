import React from 'react';
import  s from'./Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import UserDataContainer from './UserData/UserDataContainer';

const Profile = (props) => {
   return (
      <div className = {s.content}>
         <UserDataContainer />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;