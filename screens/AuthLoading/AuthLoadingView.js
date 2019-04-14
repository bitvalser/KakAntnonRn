import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Colors from '../../core/constants/colors';
import styles from './styles';

class AuthLoadingView extends React.Component {
  constructor(props) {
    super(props);
    this.checkState();
  }

  checkState = () => {
    setTimeout(() => {
      this.props.initAuth();
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.tintColor} />
      </View>
    );
  }
}

export default AuthLoadingView;