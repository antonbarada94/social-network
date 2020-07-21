import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import BackgroundContainer from './components/Background/BackgroundContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';

const App = (props) => {
   return (
         <div className='app-wrapper'>
            <HeaderContainer />
            <BackgroundContainer />
            <Navigation />
            <div className='app-wrapper-content'>
               <Route path = '/profile/:userId?' render = {() => <ProfileContainer />} />
               <Route path = '/dialogs' render = {() => <DialogsContainer />} />
               <Route path = '/projects' render = {() => <ProjectsContainer /> } />
               <Route path = '/music' render = {() => <Music />} />
               <Route path = '/settings' render = {() => <Settings />} />
               <Route path = '/login' render = {() => <Login />} />
            </div>
         </div>
   );
}

export default App;
