import React from 'react';
import './Project.css'
import projectImage from '../../../assets/images/project.png'
import { NavLink } from 'react-router-dom';

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
               ? <button disabled={props.followInProgress.some(id => id === props.id)}
                     onClick={() => { props.unfollowThunk(props.id) }}>
                     Unfollow</button>
               : <button disabled={props.followInProgress.some(id => id === props.id)}
                     onClick={() => {props.followThunk(props.id)}}>
                     Follow</button>}
         </div>
      </div>
   );
}

export default Project;