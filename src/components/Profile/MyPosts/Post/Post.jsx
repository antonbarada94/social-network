import React from 'react';
import './Post.css'
import postAvatar from '../../../../img/post_avatar.png'

const Post = () => {
   return (
      <div className = 'post'>
         <img src = {postAvatar}/>
         post1
         <p>
            <span>like</span>
         </p>
      </div>
   );
}

export default Post;