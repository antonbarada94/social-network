import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import projectsReducer from "./projects-reducer";
import backgroundReducer from "./background-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   projectsPage: projectsReducer,
   backgroundPage: backgroundReducer,
});

let store = createStore(reducers);

export default store;