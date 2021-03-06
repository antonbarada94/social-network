import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  setCurrentPage, toggleIsFollowInProgress, getProjects, followThunk, unfollowThunk } from '../../redux/projects-reducer';
import Projects from './Projects';
import Preloader from '../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProjectsAPIComponent extends React.Component {

   componentDidMount() {
      this.props.getProjects(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.getProjects(pageNumber, this.props.pageSize);
   }

   render() {

      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Projects totalProjectsCount={this.props.totalProjectsCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            projects={this.props.projects}
            followInProgress = {this.props.followInProgress}
            followThunk = {this.props.followThunk}
            unfollowThunk = {this.props.unfollowThunk}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      projects: state.projectsPage.projects,
      pageSize: state.projectsPage.pageSize,
      totalProjectsCount: state.projectsPage.totalProjectsCount,
      currentPage: state.projectsPage.currentPage,
      isFetching: state.projectsPage.isFetching,
      followInProgress: state.projectsPage.followInProgress,
   }
}

const ProjectsContainer = compose (
   withAuthRedirect,
   connect(mapStateToProps, 
      { follow, unfollow, setCurrentPage,
         getProjects, followThunk, unfollowThunk })
)(ProjectsAPIComponent)

export default ProjectsContainer;  
