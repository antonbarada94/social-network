import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Background from './components/Background/Background';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Background />
            <Navigation />
            <div className='app-wrapper-content'>
               <Route path = '/profile' component = {Profile} />
               <Route path = '/dialogs' component = {Dialogs} />
               <Route path = '/news' component = {News} />
               <Route path = '/music' component = {Music} />
               <Route path = '/settings' component = {Settings} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
