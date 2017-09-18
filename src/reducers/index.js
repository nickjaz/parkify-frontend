import {combineReducers} from 'redux';
import searchReducer from './search-reducer.js';
import profileReducer from './profile-reducer.js';

export default combineReducers({
  nearbyLots: searchReducer,
  profile: profileReducer
});