import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
   componentDidMount() {
      this.props.getProfile(this.props.match.params.userId)
   }

   render() {
      return (
         <Profile {...this.props} profile = {this.props.profile} />
      )
   }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
   }
}

let WithUrlDataContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainer)