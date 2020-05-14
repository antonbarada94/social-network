import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import search from '../../img/search.png'

const Dialogs = (props) => {
   return (
      <div className = 'dialogs'>
         <div className = "dialogs-items">
            <div className = 'dialogs-search'>
               <img src= {search}/>
               <input className = 'dialogs-search-input' type="text" placeholder = 'Search'/>
            </div>
            
            <div className = 'dialogs-container'>
               <Dialog  name = 'Anton' id = '1'/>
               <Dialog  name = 'Liza' id = '2'/>
               <Dialog  name = 'Sergei' id = '3'/>
               <Dialog  name = 'Nastya' id = '4'/>
               <Dialog  name = 'Natasha' id = '5'/>
            </div>
            
         </div>
         <div className = 'messages'>
            <Message message = 'Hi' />
            <Message message = 'How is your barada?' />
            <Message message = 'Whats up dude!' />
         </div>
      </div>
   )
}

export default Dialogs;