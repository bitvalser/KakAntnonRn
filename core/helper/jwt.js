import { AsyncStorage } from 'react-native';
import asyncStorage from '../../core/constants/asyncStorage';

const jwt = async () => {
  return await AsyncStorage.getItem(asyncStorage.JWT);
};

export const token = async () => {
  const jwtstr = await jwt();
  return `Bearer ${jwtstr}`;
};
