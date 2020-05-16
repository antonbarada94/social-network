import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: "It's my first post", user: 'Anton Sergushkin', date: '05 / 05 / 2020', likeCount: 15},
  {id: 2, message: 'Hi, how are you?', user: 'Elizaveta Kaminskaya', date:'10 / 05 / 2020', likeCount: 10},
  {id: 3, message: 'All is good, thanks!', user: 'Anton Sergushkin', date:'11 / 05 / 2020', likeCount: 40},
]

let dialogs = [
  {id: 1, name: 'Anton'},
  {id: 2, name: 'Liza'},
  {id: 3, name: 'Sergei'},
  {id: 4, name: 'Nastya'},
  {id: 5, name: 'Natasha'},
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your barada?'},
  {id: 3, message: 'Whats up dude!'},
  {id: 4, message: 'Hi. How you doing?'},
  {id: 5, message: 'Okay'},
]

ReactDOM.render(
  <React.StrictMode>
    <App  posts = {posts} dialogs = {dialogs} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
