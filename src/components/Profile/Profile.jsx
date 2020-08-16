import React from 'react';
import  s from'./Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import UserData from './UserData/UserData';

const Profile = (props) => {
   return (
      <div className = {s.content}>
         <UserData  profile = {props.profile} skills = {props.skills} status = {props.status} updateStatus = {props.updateStatus}/>
         <MyPostsContainer />
      </div>
   );
}

export default Profile;