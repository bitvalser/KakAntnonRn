import React from 'react';
import { Text, View, TouchableNativeFeedback, Alert, ActivityIndicator } from 'react-native';
import TextInputComponent from '../../core/components/TextInput/index';
import styles from './styles';
import Colors from '../../core/constants/colors';

class RegistrationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: '',
      login: '',
      password: '',
      confirmPassword: ''
    };
  }
  register = () => {
    if (this.state.password === this.state.confirmPassword) {
      this.props.register(
        {
          login: this.state.login,
        },
        this.state.password
      );
    } else {
      Alert.alert('Register error', 'Passwords do not match!');
    }
  };
  goLogin = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? <ActivityIndicator style={styles.loading} size="large" color={Colors.tintColor} /> : null}
        <View style={styles.authInputs}>
          <TextInputComponent onChangeText={value => this.setState({ login: value })} placeholder="Почта..." />
          <TextInputComponent
            onChangeText={value => this.setState({ password: value })}
            placeholder="Пароль..."
            type="password"
          />
          <TextInputComponent
            onChangeText={value => this.setState({ confirmPassword: value })}
            placeholder="Подтверждение пароля..."
            type="password"
          />
        </View>
        <TouchableNativeFeedback onPress={this.register}>
          <View style={styles.register}>
            <Text style={styles.registerText}>ЗАРЕГЕСТРИРОВАТЬСЯ</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.goLogin}>
          <View style={styles.login}>
            <Text style={styles.loginText}>ВОЙТИ</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default RegistrationView;
