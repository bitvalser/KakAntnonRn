import React from 'react';
import { View, Text, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import TextInputComponent from '../../core/components/TextInput/index';
import styles from './styles';
import Colors from '../../core/constants/colors';

class AuthorizationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }
  login = () => {
    this.props.login(this.state.login, this.state.password);
  };
  goRegister = () => {
    this.props.navigation.navigate('Registration');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>KakAnton</Text>
        {this.props.isLoading ? <ActivityIndicator style={styles.loading} size="large" color={Colors.tintColor} /> : null}
        <View style={styles.authInputs}>
          <TextInputComponent onChangeText={value => this.setState({ login: value })} placeholder="Почта..." />
          <TextInputComponent
            onChangeText={value => this.setState({ password: value })}
            placeholder="Пароль..."
            type="password"
          />
        </View>
        <TouchableNativeFeedback onPress={this.login}>
          <View style={styles.login}>
            <Text style={styles.loginText}>ВОЙТИ</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.goRegister}>
          <View style={styles.register}>
            <Text style={styles.registerText}>ЗАРЕГЕСТРИРОВАТЬСЯ</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default AuthorizationView;
