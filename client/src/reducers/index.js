import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer';

const reducers = combineReducers({
  tracks: tracksReducer
});

export default reducers;
