import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div>
         my posts
         <div>
            <textarea>What's new?</textarea>
            <button>Post</button>
         </div>
         <div className = 'posts'>
            <Post />
            <Post />
         </div>
      </div>
   );
}

export default MyPosts;