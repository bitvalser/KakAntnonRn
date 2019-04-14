import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../core/components/TabBarIcon/index';

import ProfileScreen from '../screens/Profile/index';
import SheduleScreen from '../screens/Shedule/index';
import ForumScreen from '../screens/Forum/index';
import AchivmentsScreen from '../screens/Achivments/index';
import TermpapersScreen from '../screens/Termpapers/index';
import ForumDetailScreen from '../screens/Forum/ForumDetail/index';

// PROFILE
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Профиль',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="profile" />
};

// FORUM
const ForumStack = createStackNavigator({
  Forum: ForumScreen,
  ForumDetail: ForumDetailScreen
});

ForumStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Форум',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="forum" />,
  tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'ForumDetail' ? false : true
});

//  SHEDULE
const SheduleStack = createStackNavigator({
  Shedule: SheduleScreen
});

SheduleStack.navigationOptions = {
  tabBarLabel: 'Расписание',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="shedule" />
};

// ACHIVMENTS
const AchivmentsStack = createStackNavigator({
  Achivmets: AchivmentsScreen
});

AchivmentsStack.navigationOptions = {
  tabBarLabel: 'Достижения',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="achivments" />
};

// TERMPAPERS
const TermpapersStack = createStackNavigator({
  Termpapers: TermpapersScreen
});

TermpapersStack.navigationOptions = {
  tabBarLabel: 'Курсовые',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="termpapers" />
};

export default createBottomTabNavigator(
  {
    AchivmentsStack,
    TermpapersStack,
    SheduleStack,
    ForumStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      activeTintColor: '#5700B3'
    }
  }
);
