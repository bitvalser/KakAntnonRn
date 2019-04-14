import { createStackNavigator } from 'react-navigation';
import AuthorizationScreen from '../screens/Authorization/index';
import RegisterationScrreen from '../screens/Registration/index';

export default createStackNavigator({
  Authorization: AuthorizationScreen,
  Registration: RegisterationScrreen
}, {
  initialRouteName: 'Authorization'
});
