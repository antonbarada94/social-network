import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Background from './components/Background';

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
