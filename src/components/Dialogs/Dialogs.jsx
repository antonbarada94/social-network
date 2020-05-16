import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import search from '../../img/search.png'

const Dialogs = (props) => {
   let dialogsElements = props.dialogs.map(dialog => <Dialog  name = {dialog.name} id = {dialog.id}/>)

   let messagesElements = props.messages.map(message => <Message message = {message.message} />)

   return (
      <div className = 'dialogs'>
         <div className = "dialogs-items">
            <div className = 'dialogs-search'>
               <img src= {search}/>
               <input className = 'dialogs-search-input' type="text" placeholder = 'Search'/>
            </div>
            <div className = 'dialogs-container'>
               {dialogsElements}
            </div>
         </div>
         <div className = 'messages'>
            <div className = 'messages-container'>
               {messagesElements}
            </div>
            
         </div>
      </div>
   )
}

export default Dialogs;