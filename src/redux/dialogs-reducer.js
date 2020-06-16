const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
   dialogs: [
      {id: 1, name: 'Anton', lastMessage: 'how'},
      {id: 2, name: 'Liza', lastMessage: 'are'},
      {id: 3, name: 'Sergei', lastMessage: 'you'},
      {id: 4, name: 'Nastya', lastMessage: 'fucking'},
      {id: 5, name: 'Natasha', lastMessage: 'dude'},
   ],
   
   messages: [
      {id: 1, name: 'Anton', message: 'Hi'},
      {id: 2, name: 'Liza', message: 'How is your barada?'},
      {id: 2, name: 'Liza', message: 'I love you'},
      {id: 2, name: 'Liza', message: 'Bubka'},
      {id: 2, name: 'Liza', message: 'Popkinks'},
      {id: 3, name: 'Sergei', message: 'Whats up dude!'},
      {id: 4, name: 'Nastya', message: 'Hi. How you doing?'},
      {id: 5, name: 'Natasha', message: 'Okay'},
   ],
   newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE: 
         let newMessage = {
            id: 1,
            name: 'Anton',
            message: state.newMessageText,
         };
         return {
            ...state,
            messages: [...state.messages, newMessage],
            newMessageText: '',
         };
         
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newMessage,
         }; 
         
      default:
         return state;
   }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

export default dialogsReducer;