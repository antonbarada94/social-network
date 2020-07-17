import React from 'react';
import './Projects.css'
import ProjectsNavigation from './ProjectsNavigation/ProjectsNavigation';
import Project from './Project/Project';
import { Route } from 'react-router-dom';

let Projects = (props) => {
   let pagesCount = Math.ceil(props.totalProjectsCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div className='projects'>
         <ProjectsNavigation />
         <div className='pages'>
            {pages.map(p => {
               return <span className={props.currentPage === p && 'selected-page'}
               onClick={() => { props.onPageChanged(p) }} >{p}</span>
            })}
         </div>
         <div className='projects-container'>
            {props.projects.map(project =>
               <Route path={"/projects"} render={() => <Project status={project.status} photoUrl={project.photos.small} name={project.name}
               id={project.id} direction={project.direction} key={project.id} followed={project.followed} follow={props.follow} unfollow={props.unfollow} 
               followInProgress = {props.followInProgress} followThunk = {props.followThunk}
               unfollowThunk = {props.unfollowThunk} />} />)}
         </div>
      </div>
   );
}

export default Projects;