import React from 'react';
import './Project.css'
import projectImage from '../../../assets/images/project.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { followAPI } from '../../../api/api';

const Project = (props) => {
   return (
      <div className='project'>
         <NavLink to={'profile/' + props.id}>
            <img src={props.photoUrl != null ? props.photoUrl : projectImage} />
         </NavLink>
         <div className='project-description'>
            <p className='autor'>{props.name}</p>
            <p>{props.status}</p>
            <p>{props.direction}</p>
         </div>
         <div>
            {props.followed
               ? <button disabled={props.followInProgress.some(id => id === props.id)} onClick={() => {
                  props.toggleIsFollowInProgress(true, props.id);
                  followAPI.unfollow(props.id)
                     .then(data => {
                        if (data.resultCode == 0) {
                           props.unfollow(props.id);
                        }
                        props.toggleIsFollowInProgress(false, props.id);
                     });

               }}>Unfollow</button>
               : <button disabled = {props.followInProgress.some(id => id === props.id)} onClick={() => {
                  props.toggleIsFollowInProgress(true, props.id);
                  followAPI.follow(props.id)
                     .then(data => {
                        if (data.resultCode == 0) {
                           props.follow(props.id);
                        }
                        props.toggleIsFollowInProgress(false, props.id);
                     });
               }}>Follow</button>}
         </div>
      </div>
   );
}

export default Project;