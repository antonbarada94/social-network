import React from 'react';
import './Projects.css'
import ProjectsNavigation from './ProjectsNavigation/ProjectsNavigation';
import Project from './Project/Project';
import { Route } from 'react-router-dom';
import * as axios from 'axios';

class Projects extends React.Component {

   constructor(props) {
      super(props);

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         this.props.setProjects(response.data.items);
      });
      
   }

   render() {
      return (
         <div className = 'projects'>
            <ProjectsNavigation />
            <div className = 'projects-container'>
               {this.props.projects.map(project => 
               <Route path = {"/projects/popular"}  render = {() => <Project status = {project.status} photoUrl = {project.photos.small} name = {project.name}  
               id = {project.id} direction = {project.direction} key = {project.id} followed = {project.followed} follow = {this.props.follow} unfollow = {this.props.unfollow} />} /> )}
            </div>
         </div>
      );
   }
}

export default Projects;