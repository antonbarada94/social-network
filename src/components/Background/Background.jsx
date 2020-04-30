import React from 'react';
import './Background.css'

const Background = () => {
   return (
      <div className = 'background'>
         <div className = "mini_description">
            <p className = 'username'>Firstname + Lastname</p>
            <p className = 'specialization'>Specialization</p>
            <p className = 'location'>Location</p>
         </div>
      </div>
   );
}

export default Background;