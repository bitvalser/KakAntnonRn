import React from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';
import ClickableIcon from '../../core/components/ClickableIcon/index';
import { logoutUser } from '../../redux/actions/authorization';
import { loadAchives } from '../../redux/actions/achives';

class ProfileContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Профиль',
    headerRight: <ClickableIcon onPress={() => navigation.state.params.logOut()} name="logout" />
  });
  constructor(props) {
    super(props);
  }
  render() {
    return <ProfileView {...this.props} />;
  }
}

export default connect(
  state => ({
    user: state.user.data,
    achives: state.achives.data,
    isAchiveLoad: state.achives.isLoading
  }),
  dispatch => ({
    logout: () => dispatch(logoutUser()),
    loadAchives: () => dispatch(loadAchives())
  })
)(ProfileContainer);
