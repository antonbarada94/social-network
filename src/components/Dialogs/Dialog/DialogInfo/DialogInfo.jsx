import React from 'react';
import './DialogInfo.css';

const DialogInfo = (props) => {
   return (
      <div className="dialog-info">
         <p>{props.name}</p>
         <p>{props.lastMessage}</p>
      </div>
   );
}

export default DialogInfo;