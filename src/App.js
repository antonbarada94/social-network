import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import BackgroundContainer from './components/Background/BackgroundContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
   return (
         <div className='app-wrapper'>
            <Header />
            <BackgroundContainer />
            <Navigation />
            <div className='app-wrapper-content'>
               <Route path = '/profile' render = {() => <Profile />} />
               <Route path = '/dialogs' render = {() => <DialogsContainer />} />
               <Route path = '/projects' render = {() => <ProjectsContainer /> } />
               <Route path = '/music' render = {() => <Music />} />
               <Route path = '/settings' render = {() => <Settings />} />
            </div>
         </div>
   );
}

export default App;
