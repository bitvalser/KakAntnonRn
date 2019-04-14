import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthorizationNavigator from './AuthorizationNavigator';
import AuthLoadingScreen from '../screens/AuthLoading/index';

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  Auth: AuthorizationNavigator
},{
  initialRouteName: 'AuthLoading'
}));