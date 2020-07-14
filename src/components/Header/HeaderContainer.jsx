import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth-reducer';
import { authMeAPI } from '../../api/api';

class HeaderContainer extends React.Component {
   componentDidMount() {
      authMeAPI.authMe()
         .then(data => {
            debugger
            if (data.resultCode === 0) {
               let { id, email, login } = data.data
               this.props.setUserData(id, email, login);
            }
         });

   }

   render() {
      return <Header {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
}

export default connect(mapStateToProps, { setUserData })(HeaderContainer);