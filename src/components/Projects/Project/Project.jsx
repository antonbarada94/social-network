import React from 'react';
import './Project.css'
import projectImage from '../../../assets/images/project.png'

const Project = (props) => {
   return (
      <div className='project'>
         <img src={props.photoUrl != null ? props.photoUrl : projectImage} />
         <div className = 'project-description'>
            <p className = 'autor'>{props.name}</p>
            <p>{props.status}</p>
            <p>{props.direction}</p>
         </div>
         <div>
            {props.followed 
            ? <button onClick = { () => { props.unfollow(props.id) } }>Unfollow</button> 
            : <button onClick = { () => { props.follow(props.id) } }>Follow</button>}
         </div>
      </div>
   );
}

export default Project;