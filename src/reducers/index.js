import { combineReducers } from 'redux';
import searchApplication from './searchApplication';

export default combineReducers({
  movies: searchApplication
});