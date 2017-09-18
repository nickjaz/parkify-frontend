import {combineReducers} from 'redux';
import searchReducer from './search-reducer.js';
import profileReducer from './profile-reducer.js';
import hostLotsReducer from './host-lot-reducers.js';

export default combineReducers({
  nearbyLots: searchReducer,
  profile: profileReducer,
  hostLots: hostLotsReducer
});