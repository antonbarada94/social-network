import React from 'react';
import './Post.css'
import postAvatar from '../../../../img/post_avatar.png'
import like from '../../../../img/like.png'

const Post = (props) => {
   return (
      <div className = 'post'>
         <div className = 'post-data'>
            <img src = {postAvatar}/>
            <div className = 'post-data-user'>
               <p className = 'post-data-username'>
                  {props.user}
               </p>
               <p className = 'post-data-userdate'>
                  {props.date}
               </p>
            </div> 
         </div>
         <p className = 'post-message'>
            {props.message}
         </p>
         <p className = 'post-likes'>
            <img src = {like}/>
            <span>{props.likeCount}</span>
         </p>
      </div>
   );
}

export default Post;