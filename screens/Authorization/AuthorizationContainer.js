import React from 'react';
import AuthorizationView from './AuthorizationView';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authorization';

class AuthorizationScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return <AuthorizationView {...this.props} />;
  }
}

export default connect(
  state => {
    return {
      isLoading: state.authorization.isLoading
    };
  },
  dispatch => ({
    login: (login, password) => {
      dispatch(loginUser(login, password));
    }
  })
)(AuthorizationScreen);
