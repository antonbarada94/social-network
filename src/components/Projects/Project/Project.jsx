import React from 'react';
import './Project.css'

const Project = (props) => {
   return (
      <div className='project'>
         <img src={props.photoUrl} />
         <div className = 'project-description'>
            <p className = 'autor'>{props.autor}</p>
            <p>{props.name}</p>
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