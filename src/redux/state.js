import { rerenderEntireTree } from "../render";

 let state = {
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
 }

export let addPost = () => {
   let newPost = {
      id: 5,
      message: state.messagesPage.newPostText,
      user: 'Anton Sergushkin',
      date: '25 / 05 / 2020',
      likeCount: 0,
   };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export let addMessage = () => {
   let newMessage = {
      id: 1,
      name: 'Anton',
      message: state.messagesPage.newMessageText,
   };
   state.messagesPage.messages.push(newMessage);
   state.messagesPage.newMessageText = '';
   rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
   state.messagesPage.newMessageText = newMessage;
   rerenderEntireTree(state);
}

 export default state;