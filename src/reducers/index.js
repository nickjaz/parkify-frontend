import {combineReducers} from 'redux';
import authReducer from './auth-reducer.js';
import searchReducer from './search-reducer.js';
import profileReducer from './profile-reducer.js';
import hostLotsReducer from './host-lot-reducers.js';

export default combineReducers({
  auth: authReducer,
  nearbyLots: searchReducer,
  profile: profileReducer,
  hostLots: hostLotsReducer
});