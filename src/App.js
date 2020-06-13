import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Background from './components/Background/Background';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
               <Route path = '/profile' render = {() => <Profile />} />
               <Route path = '/dialogs' render = {() => <DialogsContainer />} />
               <Route path = '/news' render = {() => <News />} />
               <Route path = '/music' render = {() => <Music />} />
               <Route path = '/settings' render = {() => <Settings />} />
            </div>
         </div>
   );
}

export default App;
