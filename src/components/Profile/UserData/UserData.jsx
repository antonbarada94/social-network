import React from 'react';
import './UserData.css';
import avatar from '../../../img/post_avatar.png';
import Description from './Description/Description';
import Statistics from './Statistics/Statistics';
import Skills from './Skills/Skills';

const Userdata = (props) => {
   return (
      <div>
         <div className='user-data'>
            <img src={avatar} />
            <Description />
            <Statistics />
         </div>
         <Skills skills = {props.skills} />
      </div>
   );
}

export default Userdata;