let store = {
   _state: {
      profilePage: {
         posts: [
            {id: 1, message: "It's my first post", user: 'Anton Sergushkin', date: '05 / 05 / 2020', likeCount: 15},
            {id: 2, message: 'Hi, how are you?', user: 'Elizaveta Kaminskaya', date:'10 / 05 / 2020', likeCount: 10},
            {id: 3, message: 'All is good, thanks!', user: 'Anton Sergushkin', date:'11 / 05 / 2020', likeCount: 40},
         ],
         newPostText: "",
      },
   
      messagesPage: {
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
   },

   _callSubscriber() {
      console.log("change");
   },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         user: 'Anton Sergushkin',
         date: '25 / 05 / 2020',
         likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },

   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },

   addMessage() {
      let newMessage = {
         id: 1,
         name: 'Anton',
         message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber(this._state);
   },

   updateNewMessageText(newMessage) {
      this._state.messagesPage.newMessageText = newMessage;
      this._callSubscriber(this._state);
   },
}

 export default store;