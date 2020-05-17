import React from 'react';
import './DialogInfo.css';

const DialogInfo = (props) => {
   return (
      <div className="dialog-info">
         <p>{props.name}</p>
         <p>Message</p>
      </div>
   );
}

export default DialogInfo;