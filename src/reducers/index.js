import {combineReducers} from 'redux';
import searchReducer from './search-reducer.js';

export default combineReducers({
  nearbyLots: searchReducer
});