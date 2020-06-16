import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = (props) => {

   let postsElements = props.posts.map(post => <Post key = {post.id} message = {post.message} user = {post.user} date = {post.date} likeCount = {post.likeCount} />).reverse();

   let addPost = () => {
      props.addPost();
   }

   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
   }

   return (
      <div>
         <div className = 'newpost'>
            <textarea className = 'newpost-area' placeholder = "What's new?" onChange = {onPostChange} value = {props.newPostText}></textarea>
            <button className = 'newpost-button' onClick = {addPost}>Post</button>
         </div>
         <div className = 'posts'>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts;