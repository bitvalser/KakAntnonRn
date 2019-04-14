import React from 'react';
import AchivmentsView from './AchivmentsView';
import { loadAllAchives, createAchive } from '../../redux/actions/achives';
import { connect } from 'react-redux';

class AchivmentsContainer extends React.Component {
  static navigationOptions = {
    title: 'Достижения'
  };

  render() {
    return <AchivmentsView {...this.props} />;
  }
}

export default connect(
  state => ({
    isLoading: state.achives.isLoadingAll,
    achives: state.achives.allData,
    role: state.user.data ? state.user.data.role : 'unknown'
  }),
  dispatch => ({
    loadAchives: () => dispatch(loadAllAchives()),
    createAchive: (title, description) => dispatch(createAchive(title, description))
  })
)(AchivmentsContainer);
