import { FETCH_SPOTIFY_TOKEN } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_SPOTIFY_TOKEN:
      return action.payload || false;
    default:
      return state;
  }
};
