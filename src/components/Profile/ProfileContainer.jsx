import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
   componentDidMount() {
      this.props.getProfile(this.props.match.params.userId)
   }

   render() {
      if (!this.props.isAuth) return <Redirect to = 'login' />
      return (
         <Profile {...this.props} profile = {this.props.profile} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth,
   }
}

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainer)