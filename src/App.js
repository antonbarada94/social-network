import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Background from './components/Background/Background';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
   return (
         <div className='app-wrapper'>
            <Header />
            <Background />
            <Navigation />
            <div className='app-wrapper-content'>
               <Route path = '/profile' render = {() => <Profile state = {props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>} />
               <Route path = '/dialogs' render = {() => <Dialogs state =  {props.state.messagesPage}/>} />
               <Route path = '/news' render = {() => <News />} />
               <Route path = '/music' render = {() => <Music />} />
               <Route path = '/settings' render = {() => <Settings />} />
            </div>
         </div>
   );
}

export default App;
