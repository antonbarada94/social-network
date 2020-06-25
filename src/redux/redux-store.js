import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import projectsReducer from "./projects-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   projectsPage: projectsReducer,
});

let store = createStore(reducers);

export default store;