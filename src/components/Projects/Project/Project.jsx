import React from 'react';
import './Project.css'
import projectImage from '../../../assets/images/project.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
               ? <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                     withCredentials: true,
                     headers: {
                        "API-KEY": "99e454ab-399c-4111-94c5-3cd3402b365b"
                     }
                  })
                  .then(response => {
                     if (response.data.resultCode == 0) {
                        props.unfollow(props.id);
                     }
                  });
                  
               }}>Unfollow</button>
               : <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                     withCredentials: true,
                     headers: {
                        "API-KEY": "99e454ab-399c-4111-94c5-3cd3402b365b"
                     }
                  })
                     .then(response => {
                        if (response.data.resultCode == 0) {
                           props.follow(props.id);
                        }
                     });
               }}>Follow</button>}
         </div>
      </div>
   );
}

export default Project;