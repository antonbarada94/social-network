import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
   profile: null,
   status: '', 
}

const profileReducer = (state = initialState, action) => {
   
   switch (action.type) {
      case ADD_POST: 
         let newPost = {
            id: 5,
            message: state.newPostText,
            user: 'Anton Sergushkin',
            date: '25 / 05 / 2020',
            likeCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         };
      
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         };

      case SET_PROFILE:
         return {
            ...state,
            profile: action.profile,
         };

      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         }
      
      default: 
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
   return (dispatch) => {
      if (!userId) {
         userId = 9211;
      }
      profileAPI.getProfile(userId)
         .then(data => {
            dispatch(setProfile(data));
         });
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      if (!userId) {
         userId = 9211;
      }
      profileAPI.getStatus(userId)
         .then(data => {
            dispatch(setStatus(data));
         });
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(data => {
            if (data.resultCode == 0) {
               dispatch(setStatus(status));
            } 
         });
   }
}



export default profileReducer;