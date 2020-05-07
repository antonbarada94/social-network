import React from 'react';
import  s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Userdata from './UserData/UserData';

const Profile = () => {
   return (
      <div className = {s.content}>
         <Userdata />
         <MyPosts />
      </div>
   );
}

export default Profile;