import React from 'react';
import TermpapersView from './TermpapersView';
import { connect } from 'react-redux';
import { loadTermpapers, takeTermpaper, createTermpaper } from '../../redux/actions/termpapers';

class TermpapersScreen extends React.Component {
  static navigationOptions = {
    title: 'Курсовые'
  };
  render() {
    return <TermpapersView {...this.props} />;
  }
}

export default connect(
  state => ({
    isLoading: state.termpapers.isLoading,
    termpapers: state.termpapers.data,
    role: state.user.data ? state.user.data.role : 'unknown'
  }),
  dispatch => ({
    loadTermpapers: () => dispatch(loadTermpapers()),
    takeTermpaper: theme => dispatch(takeTermpaper(theme)),
    createTermpaper: (theme, description) => dispatch(createTermpaper(theme, description))
  })
)(TermpapersScreen);
