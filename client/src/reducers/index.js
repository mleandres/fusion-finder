import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer';
import authReducer from './authReducer';
import favouritesReducer from './favouritesReducer';

const reducers = combineReducers({
  tracks: tracksReducer,
  token: authReducer,
  favourites: favouritesReducer
});

export default reducers;
