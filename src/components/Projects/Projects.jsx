import React from 'react';
import './Projects.css'
import ProjectsNavigation from './ProjectsNavigation/ProjectsNavigation';
import Project from './Project/Project';
import { Route } from 'react-router-dom';
import * as axios from 'axios';


const Projects = (props) => {
   if (props.projects.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         props.setProjects(response.data.items);
      });
   }

   let projectsElements = props.projects.map(project => 
   <Route path = {"/projects/popular"}  render = {() => <Project status = {project.status} photoUrl = {project.photos.small} name = {project.name}  
   id = {project.id} direction = {project.direction} key = {project.id} followed = {project.followed} follow = {props.follow} unfollow = {props.unfollow} />} /> )

   return (
      <div className = 'projects'>
         <ProjectsNavigation />
         <div className = 'projects-container'>
            {projectsElements}
         </div>
      </div>
   );
}

export default Projects;