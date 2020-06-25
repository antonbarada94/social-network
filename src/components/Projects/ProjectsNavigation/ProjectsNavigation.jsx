import React from 'react';
import './ProjectsNavigation.css'
import { NavLink, Route } from 'react-router-dom';

const ProjectsNavigation = (props) => {
   return (
      <div>
         <nav className = 'project-navigation'>
            <div>
               <NavLink to = '/projects/popular'>Popular</NavLink>
            </div>
            <div>
               <NavLink to = '/projects/topics'>Topics</NavLink>
            </div>
            <div>
               <NavLink to = '/projects/newest'>Newest</NavLink>
            </div>
         </nav>
      </div>
   );
}

export default ProjectsNavigation;