import { Alert } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import AuthService from '../../core/services/AuthService';
import { AsyncStorage } from 'react-native';
import asyncStorage from '../../core/constants/asyncStorage';
import { updateUser } from './user';

export const AuthAction = {
  INIT_AUTH: 'INIT_AUTH',
  AUTH_STATE_LOGIN: 'AUTH_STATE_LOGIN',
  AUTH_STATE_NOT_LOGIN: 'AUTH_STATE_NOT_LOGIN',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILED: 'REGISTER_FAILED',
  LOGOUT: 'LOGOUT'
};

export const initAuthState = () => async dispatch => {
  dispatch({ type: AuthAction.INIT_AUTH });
  try {
    const jwt = await AsyncStorage.getItem(asyncStorage.JWT);
    const user = JSON.parse(await AsyncStorage.getItem(asyncStorage.USER));
    if (jwt && user) {
      dispatch({ type: AuthAction.AUTH_STATE_LOGIN, payload: { user, jwt } });
      dispatch(updateUser(user));
      NavigationService.navigate('Main');
    } else {
      dispatch({ type: AuthAction.AUTH_STATE_NOT_LOGIN });
      NavigationService.navigate('Auth');
    }
  } catch(error) {
    dispatch({ type: AuthAction.AUTH_STATE_NOT_LOGIN });
    NavigationService.navigate('Auth');
  }
};

export const loginUser = (login, password) => dispatch => {
  dispatch({ type: AuthAction.LOGIN });
  AuthService.login(login, password).then(
    async data => {
      const { user, jwt } = data;
      await AsyncStorage.setItem(asyncStorage.JWT, jwt);
      await AsyncStorage.setItem(asyncStorage.USER, JSON.stringify(user));
      dispatch(updateUser(user));
      dispatch({ type: AuthAction.LOGIN_SUCCESS, payload: { user, jwt } });
      NavigationService.navigate('Main');
    },
    error => {
      Alert.alert('Ошибка авторизации', error && error.message ? error.message : 'Неизвестная ошибка!');
      dispatch({ type: AuthAction.LOGIN_FAILED });
    }
  );
};

export const registerUser = (user, password) => dispatch => {
  dispatch({ type: AuthAction.REGISTER });
  AuthService.register(user, password).then(
    async data => {
      const { user, jwt } = data;
      await AsyncStorage.setItem(asyncStorage.JWT, jwt);
      await AsyncStorage.setItem(asyncStorage.USER, JSON.stringify(user));
      dispatch(updateUser(user));
      dispatch({ type: AuthAction.REGISTER_SUCCESS, payload: { user, jwt } });
      NavigationService.navigate('Main');
    },
    error => {
      Alert.alert('Ошибка регистрации', error && error.message ? error.message : 'Неизвестная ошибка!');
      dispatch({ type: AuthAction.REGISTER_FAILED });
    }
  );
};

export const logoutUser = () => dispatch => {
  AsyncStorage.removeItem(asyncStorage.JWT);
  AsyncStorage.removeItem(asyncStorage.USER);
  dispatch({ type: AuthAction.LOGOUT });
  NavigationService.navigate('Auth');
};
