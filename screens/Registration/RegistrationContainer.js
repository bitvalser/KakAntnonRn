import React from 'react';
import RegistrationView from './RegistrationView';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authorization';

class RegistrationScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <RegistrationView {...this.props} />;
  }
}

export default connect(
  state => {
    return {
      isLoading: state.authorization.isLoading
    };
  },
  dispatch => ({
    register: (user, password) => {
      dispatch(registerUser(user, password));
    }
  })
)(RegistrationScreen);
