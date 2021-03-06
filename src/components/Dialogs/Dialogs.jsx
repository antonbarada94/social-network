import React from 'react';
import './Dialogs.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Route } from 'react-router-dom';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import Search from './Search/Search';


const Dialogs = (props) => {

   let dialogsElements = props.dialogs.map(dialog => <Dialog  name = {dialog.name} id = {dialog.id} key = {dialog.id} lastMessage ={dialog.lastMessage}/>)

   let messagesElements = props.messages.map(message => <Route path = {"/dialogs/" + message.id }  render = {() => <Message message = {message.message} name = {message.name} id = {message.id} key = {message.id} />} /> )

   return (
      <div className = 'dialogs'>
         <div className = "dialogs-items">
            <Search />
            <div className = 'dialogs-container'>
               {dialogsElements}
            </div>
         </div>
         <div className = 'messages'>
            <div className = 'messages-container'>
               {messagesElements}
            </div>
            <NewMessageContainer />
         </div>
      </div>
   )
}

export default Dialogs;