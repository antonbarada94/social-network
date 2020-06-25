import React from 'react';
import { connect } from 'react-redux';
import Projects from './Projects';
import { followActionCreator, unfollowActionCreator, setProjectsActionCreator } from '../../redux/projects-reducer';

let mapStateToProps = (state) => {
   return {
      projects: state.projectsPage.projects
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (projectId) => {
         dispatch(followActionCreator(projectId));
      },
      unfollow: (projectId) => {
         dispatch(unfollowActionCreator(projectId));
      },
      setProjects: (projects) => {
         dispatch(setProjectsActionCreator(projects))
      }
   }
}

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects)

export default ProjectsContainer;  