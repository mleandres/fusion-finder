import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  tracks: tracksReducer,
  token: authReducer
});

export default reducers;
