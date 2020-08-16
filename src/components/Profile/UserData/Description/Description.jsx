import React from 'react';
import './Description.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Description = (props) => {
   return (
      <div className = 'description'>
         <p className = 'username'>{props.fullName}</p>
         <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
      </div>
   );
}

export default Description;