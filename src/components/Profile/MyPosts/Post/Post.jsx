import React from 'react';
import './Post.css'
import postAvatar from '../../../../img/post_avatar.png'

const Post = (props) => {
   return (
      <div className = 'post'>
         <img src = {postAvatar}/>
         {props.message}
         <p>
            <span>like {props.likeCount}</span>
         </p>
      </div>
   );
}

export default Post;