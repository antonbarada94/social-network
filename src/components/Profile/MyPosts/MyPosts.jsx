import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = (props) => {
   let postsElements = props.posts.reverse().map(post => <Post message = {post.message} user = {post.user} date = {post.date} likeCount = {post.likeCount} />)

   return (
      <div>
         <div className = 'newpost'>
            <textarea className = 'newpost-area' placeholder = "What's new?"></textarea>
            <button className = 'newpost-button'>Post</button>
         </div>
         <div className = 'posts'>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts;