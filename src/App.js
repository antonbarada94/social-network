import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Background from './components/Background/Background';

const App = () => {
   return (
      <div className='app-wrapper'>
         <Header />
         <Background />
         <Navigation />
         <Profile />
      </div>
   );
}

export default App;
