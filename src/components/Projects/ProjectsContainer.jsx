import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setProjects, setCurrentPage, setTotalProjectsCount, toggleIsFetching } from '../../redux/projects-reducer';
import * as axios from 'axios';
import Projects from './Projects';
import Preloader from '../common/Preloader/Preloader';


class ProjectsAPIComponent extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true,})
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setProjects(response.data.items);
            this.props.setTotalProjectsCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true,})
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setProjects(response.data.items);
         });
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
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (projectId) => {
//          dispatch(followActionCreator(projectId));
//       },
//       unfollow: (projectId) => {
//          dispatch(unfollowActionCreator(projectId));
//       },
//       setProjects: (projects) => {
//          dispatch(setProjectsActionCreator(projects));
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPageActionCreator(pageNumber));
//       },
//       setTotalProjectsCount: (totalCount) => {
//          dispatch(setTotalProjectsCountActionCreator(totalCount));
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingActionCreator(isFetching));
//       }
//    }
// }

const ProjectsContainer = connect(mapStateToProps, { follow, unfollow, setProjects, setCurrentPage, setTotalProjectsCount, toggleIsFetching, })(ProjectsAPIComponent)

export default ProjectsContainer;  
