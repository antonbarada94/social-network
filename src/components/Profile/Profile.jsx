import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
      <div className='content'>
         <div>
            avatar + description
         </div>
         <MyPosts />
      </div>
   );
}

export default Profile;