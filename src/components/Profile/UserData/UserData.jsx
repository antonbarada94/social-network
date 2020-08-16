import React from 'react';
import './UserData.css';
import Description from './Description/Description';
import Statistics from './Statistics/Statistics';
import Skills from './Skills/Skills';
import Preloader from '../../common/Preloader/Preloader';
import profileImage from '../../../assets/images/project.png'

const Userdata = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div className='user-data'>
            <img src={props.profile.photos.small != null ? props.profile.photos.small : profileImage} />
            <Description fullName = {props.profile.fullName} specialization = {props.profile.lookingForAJobDescription} status = {props.status} updateStatus = {props.updateStatus} />
            <Statistics />
         </div>
         <Skills skills = {props.skills} />
      </div>
   );
}

export default Userdata;