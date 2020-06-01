import React from 'react';
import  s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Userdata from './UserData/UserData';

const Profile = (props) => {
   return (
      <div className = {s.content}>
         <Userdata />
         <MyPosts posts = {props.state.posts} dispatch = {props.dispatch} newPostText = {props.state.newPostText} />
      </div>
   );
}

export default Profile;