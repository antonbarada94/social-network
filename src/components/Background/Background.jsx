import React from 'react';
import './Background.css'

const Background = (props) => {
   return (
      <div className = 'background'>
         <div className = "mini_description">
            <p className = 'username'>{props.userDescription.name}</p>
            <p className = 'specialization'>{props.userDescription.specialization}</p>
            <p className = 'location'>{props.userDescription.location}</p>
         </div>
      </div>
   );
}

export default Background;