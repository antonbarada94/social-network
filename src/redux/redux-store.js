import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import projectsReducer from "./projects-reducer";
import backgroundReducer from "./background-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   projectsPage: projectsReducer,
   backgroundPage: backgroundReducer,
   auth: authReducer,
});

let store = createStore(reducers);

export default store;