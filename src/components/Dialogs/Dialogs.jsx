import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import search from '../../img/search.png'
import { Route } from 'react-router-dom';
import currentUserAvatar from '../../img/post_avatar.png'
import { createRef } from 'react';

const Dialogs = (props) => {
   let dialogsElements = props.state.dialogs.map(dialog => <Dialog  name = {dialog.name} id = {dialog.id} lastMessage ={dialog.lastMessage}/>)

   let messagesElements = props.state.messages.map(message => <Route path = {"/dialogs/" + message.id } render = {() => <Message message = {message.message} name = {message.name} id = {message.id} />} /> )

   let newMesageElement = React.createRef();

   let addMessage = () => {
      let text = newMesageElement.current.value;
      alert(text);
   }

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
            <div className = 'new-messages'>
               <img src = {currentUserAvatar}/>
               <div className = 'new-message'>
                  <textarea ref = {newMesageElement} className = 'new-message-area' placeholder = 'Message'></textarea>
                  <button className = 'new-message-button' onClick = {addMessage}></button>
               </div>
               <img src = {currentUserAvatar}/>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;