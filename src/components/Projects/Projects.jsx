import React from 'react';
import './Projects.css'
import ProjectsNavigation from './ProjectsNavigation/ProjectsNavigation';
import Project from './Project/Project';
import { Route } from 'react-router-dom';

const Projects = (props) => {
   if (props.projects.length === 0) {
      props.setProjects([
         {id: 1, photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/613RlsjseuL._AC_SL1100_.jpg', 
         autor: 'Elizaveta Kaminskaya', name: 'Marsel', direction: 'art', path: 'popular', followed: true, },
         {id: 2, photoUrl:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
         autor: 'Anastasia Kaminskaya', name: 'Aska', direction: 'art-book', path: 'topics', followed: false },
         {id: 3, photoUrl: 'https://images.squarespace-cdn.com/content/v1/59900d4f03596e7caf5990e4/1568675396363-KOZO98RZHM2VWRENZHYP/ke17ZwdGBToddI8pDm48kCkF9EYTO2SL_rPdI1CRtxd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmW5SZw0zY0wEgct1jJcv4nAniXBDNSmk3MLBPBtB4AGr24PNuuvMI4zuZeh8zFl3o/Barbosa+45+1.jpg?format=1500w', 
         autor: 'Anastasia Kaminskaya', name: 'Aska', direction: 'art-book', path: 'topics', followed: false },
         {id: 4, photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/613RlsjseuL._AC_SL1100_.jpg', 
         autor: 'Anastasia Kaminskaya', name: 'Aska', direction: 'art-book', path: 'topics', followed: false },
         {id: 5, photoUrl: 'https://i.guim.co.uk/img/media/ebe32049abedf9bbad34930c50db31645c853bd7/0_0_2268_3028/master/2268.jpg?width=700&quality=85&auto=format&fit=max&s=9fe057664415755325615683056c8a19', 
         autor: 'Anton Sergushkin', name: 'Armas', direction: 'games', path: 'newest', followed: true },
         {id: 6, photoUrl: 'https://images.squarespace-cdn.com/content/v1/59900d4f03596e7caf5990e4/1568675396363-KOZO98RZHM2VWRENZHYP/ke17ZwdGBToddI8pDm48kCkF9EYTO2SL_rPdI1CRtxd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmW5SZw0zY0wEgct1jJcv4nAniXBDNSmk3MLBPBtB4AGr24PNuuvMI4zuZeh8zFl3o/Barbosa+45+1.jpg?format=1500w', 
         autor: 'Anton Sergushkin', name: 'Armas', direction: 'games', path: 'newest', followed: true },
         {id: 7, photoUrl:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
         autor: 'Anton Sergushkin', name: 'Armas', direction: 'games', path: 'newest', followed: true },
         {id: 8, photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/613RlsjseuL._AC_SL1100_.jpg', 
         autor: 'Anton Sergushkin', name: 'Armas', direction: 'games', path: 'newest', followed: true },
         ],
      )
   }

   let projectsElements = props.projects.map(project => 
   <Route path = {"/projects/" + project.path }  render = {() => <Project autor = {project.autor} photoUrl = {project.photoUrl} name = {project.name}  
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