import React from 'react';
import './UserData.css';
import avatar from '../../../img/post_avatar.png';
import Description from './Description/Description';
import Statistics from './Statistics/Statistics';
import Skills from './Skills/Skills';
import Preloader from '../../common/Preloader/Preloader';

const Userdata = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div className='user-data'>
            <img src={props.profile.photos.small} />
            <Description fullName = {props.profile.fullName} specialization = {props.profile.lookingForAJobDescription} />
            <Statistics />
         </div>
         <Skills skills = {props.skills} />
      </div>
   );
}

export default Userdata;