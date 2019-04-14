import React from 'react';
import AuthLoadingView from './AuthLoadingView';
import { connect } from 'react-redux';
import { initAuthState } from '../../redux/actions/authorization';

class AuthLoadingContainer extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <AuthLoadingView {...this.props} />;
  }
}

export default connect(
  state => state,
  dispatch => ({
    initAuth: () => {
      dispatch(initAuthState());
    }
  })
)(AuthLoadingContainer);
