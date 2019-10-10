import { ADD_FAVOURITE_TRACK, DELETE_FAVOURITE_TRACK, INIT_FAVOURITE_TRACKS } from '../actions/types';

const getFavouritesFromStorage = () => {
  let favs = JSON.parse(localStorage.getItem('favourites'))
  return favs ? favs : [];
}

export default(state = [], action) => {
  let newState = [...state]

  switch(action.type) {
    case INIT_FAVOURITE_TRACKS:
      newState = getFavouritesFromStorage();
      break;
    case ADD_FAVOURITE_TRACK:
      // payload track to be added
      if (!newState.some((t) => {
        return t.song === action.payload.song &&
               t.artist === action.payload.artist
      })) {
        newState.push(action.payload);
        localStorage.setItem('favourites', JSON.stringify(newState))
      }
      break;
    case DELETE_FAVOURITE_TRACK:
      // payload is index to remove
      newState.splice(action.payload, 1);
      localStorage.setItem('favourites', JSON.stringify(newState))
      break;
    default:
  }

  return newState;
}