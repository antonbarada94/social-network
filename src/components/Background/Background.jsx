import React from 'react';
import './Background.css'
import Preloader from '../common/Preloader/Preloader';

const Background = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div className = 'background'>
         <div className = "mini_description">
            <p className = 'username'>{props.profile.fullName}</p>
            <p className = 'specialization'>{props.profile.aboutMe}</p>
            <p className = 'location'>{props.userDescription.location}</p>
         </div>
      </div>
   );
}

export default Background;