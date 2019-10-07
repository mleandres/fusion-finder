import { ADD_FAVOURITE_TRACK, DELETE_FAVOURITE_TRACK } from '../actions/types';

export default(state = [], action) => {
  let newState = [...state]

  switch(action.type) {
    case ADD_FAVOURITE_TRACK:
      // payload track to be added
      if (!newState.some((t) => {
        return t.song === action.payload.song &&
               t.artist === action.payload.artist
      })) {
        newState.push(action.payload);
      }
      return newState;
    case DELETE_FAVOURITE_TRACK:
      // payload is index to remove
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}