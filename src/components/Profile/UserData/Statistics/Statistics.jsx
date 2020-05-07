import React from 'react';
import './Statistics.css';

const Statistics = (props) => {
   return (
      <div className='statistics'>
         <p>Project Views:</p>
         <span>544</span>
         <p>Appreciations:</p>
         <span>35</span>
         <p>Followers:</p>
         <span>23</span>
         <p>Following:</p>
         <span>2</span>
      </div>
   );
}

export default Statistics;