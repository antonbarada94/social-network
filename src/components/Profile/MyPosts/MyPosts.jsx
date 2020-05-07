import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div>
         <div className = 'newpost'>
            <textarea className = 'newpost-area' placeholder = "What's new?"></textarea>
            <button className = 'newpost-button'>Post</button>
         </div>
         <div className = 'posts'>
            <Post message = 'Hi, how are you?' likeCount = '10' />
            <Post message = "It's my first post" likeCount = '15' />
         </div>
      </div>
   );
}

export default MyPosts;