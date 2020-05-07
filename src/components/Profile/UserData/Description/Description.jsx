import React from 'react';
import './Description.css';

const Description = (props) => {
   return (
      <div className = 'description'>
         <p className = 'username'>Firstname + Lastname</p>
         <p className = 'specialization'>Specialization</p>
         <p className = 'location'>Location</p>
      </div>
   );
}

export default Description;