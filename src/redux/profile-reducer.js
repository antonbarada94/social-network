const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   skills:[
      {id: 1, skillname: 'Typoghraphy'},
      {id: 2, skillname: 'UI/UX'},
      {id: 3, skillname: '3D MAX'},
      {id: 4, skillname: 'Graphic Design'},
      {id: 5, skillname: 'Wireframe'},
      {id: 6, skillname: 'Color Theory'},
      {id: 7, skillname: 'Creativity'},
      {id: 8, skillname: 'Website Design'},
      {id: 9, skillname: 'Adobe Photoshop'},
      {id: 10, skillname: 'Adobe Illustrator'},
      {id: 11, skillname: 'Adobe After Effect'},
   ],
   posts: [
      {id: 1, message: "It's my first post", user: 'Anton Sergushkin', date: '05 / 05 / 2020', likeCount: 15},
      {id: 2, message: 'Hi, how are you?', user: 'Elizaveta Kaminskaya', date:'10 / 05 / 2020', likeCount: 10},
      {id: 3, message: 'All is good, thanks!', user: 'Anton Sergushkin', date:'11 / 05 / 2020', likeCount: 40},
   ],
   newPostText: "",
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            user: 'Anton Sergushkin',
            date: '25 / 05 / 2020',
            likeCount: 0,
         };
         let stateCopy = {...state};
         stateCopy.posts = [...state.posts]
         stateCopy.posts.push(newPost);
         stateCopy.newPostText = '';
         return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT: {
         let stateCopy = {...state};
         stateCopy.newPostText = action.newText;
         return stateCopy;
      }
      default: 
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export default profileReducer;