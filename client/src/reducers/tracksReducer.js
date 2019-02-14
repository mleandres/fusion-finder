import { FETCH_ALL_TRACKS } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_ALL_TRACKS:
      return action.payload;
    default:
      return state;
  }
};
