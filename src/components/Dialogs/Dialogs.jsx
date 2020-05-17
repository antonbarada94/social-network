import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import search from '../../img/search.png'

const Dialogs = (props) => {
   let dialogsElements = props.state.dialogs.map(dialog => <Dialog  name = {dialog.name} id = {dialog.id} lastMessage ={dialog.lastMessage}/>)

   let messagesElements = props.state.messages.map(message => <Message message = {message.message} name = {message.name} id = {message.id} />)

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