import React from 'react';
import './Description.css';

const Description = (props) => {
   return (
      <div className = 'description'>
         <p className = 'username'>{props.fullName}</p>
         <p className = 'specialization'>{props.specialization}</p>
         <p className = 'location'>Location</p>
      </div>
   );
}

export default Description;