import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

   let postsElements = props.posts.map(post => <Post message = {post.message} user = {post.user} date = {post.date} likeCount = {post.likeCount} />).reverse();

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
   }

   return (
      <div>
         <div className = 'newpost'>
            <textarea ref = {newPostElement} className = 'newpost-area' placeholder = "What's new?" onChange = {onPostChange} value = {props.newPostText}></textarea>
            <button className = 'newpost-button' onClick = {addPost}>Post</button>
         </div>
         <div className = 'posts'>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts;