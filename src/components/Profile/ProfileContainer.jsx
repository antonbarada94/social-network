import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   componentDidMount() {
      this.props.getProfile(this.props.match.params.userId);
      this.props.getStatus(this.props.match.params.userId);
      
      
   }

   render() {
      return (
         <Profile {...this.props} profile = {this.props.profile} skills = {this.props.skills} status = {this.props.status} updateStatus = {this.props.updateStatus} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      skills: state.profilePage.skills,
   }
}

export default compose (
   connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
   withRouter,
   withAuthRedirect,
)(ProfileContainer)
