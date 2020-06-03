const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 1,
            name: 'Anton',
            message: state.newMessageText,
         };
         state.messages.push(newMessage);
         state.newMessageText = '';
         // this._callSubscriber(this._state);
         return state;
         
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessage;
         // this._callSubscriber(this._state);
         return state;

      default:
         return state;
   }
}

export default dialogsReducer;