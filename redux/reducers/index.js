import { combineReducers } from 'redux';
import { authorization } from './authorization';
import { user } from './user';
import { achives } from './achives';
import { termpapers } from './termpapers';

export default combineReducers({
  authorization,
  user,
  achives,
  termpapers
});
