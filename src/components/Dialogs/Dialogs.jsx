import React from 'react';
import './Dialogs.css'

const Dialogs = (props) => {
   return (
      <div className = 'dialogs'>
         <div className = "dialogs-items">
            <div className = 'dialog'>
               Anton
            </div>
            <div className = 'dialog'>
               Liza
            </div>
            <div className = 'dialog'>     
               Sergei
            </div>
            <div className = 'dialog'>
               Nastya
            </div>
            <div className = 'dialog'>
               Natasha
            </div>
         </div>
         <div className = 'messages'>
            <div className="message">
               Hi
            </div>
            <div className="message">
               How is your barada?
            </div>
            <div className="message">
               Whats up dude!
            </div>
         </div>
      </div>
   )
}

export default Dialogs;