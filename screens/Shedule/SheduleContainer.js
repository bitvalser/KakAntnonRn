import React from 'react';
import SheduleView from './SheduleView';
import { connect } from 'react-redux';

class SheduleContainer extends React.Component {
  static navigationOptions = {
    title: 'Расписание'
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <SheduleView {...this.props} />;
  }
}

export default connect(
  state => state,
  dispatch => ({})
)(SheduleContainer);
