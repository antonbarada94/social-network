import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <Provider store = {store}>
               <App />
            </Provider>
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state);
});

serviceWorker.unregister();
