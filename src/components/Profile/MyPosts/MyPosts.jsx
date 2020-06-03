import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

   let postsElements = props.posts.map(post => <Post message = {post.message} user = {post.user} date = {post.date} likeCount = {post.likeCount} />).reverse();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewPostTextActionCreator(text));
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