import React from 'react';
import './Search.css';
import search from '../../../img/search.png'

const Search = (props) => {
   return (
      <div className='dialogs-search'>
         <img src={search} />
         <input className='dialogs-search-input' type="text" placeholder='Search' />
      </div>
   );
}

export default Search;