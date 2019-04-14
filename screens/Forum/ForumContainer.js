import React from 'react';
import ForumView from './ForumView';
import { connect } from 'react-redux';

class ForumContainer extends React.Component {
  static navigationOptions = {
    title: 'Форум'
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <ForumView {...this.props} />;
  }
}

export default connect(
  state => state,
  dispatch => ({})
)(ForumContainer);
