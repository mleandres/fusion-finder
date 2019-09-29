import { ADD_FAVOURITE_TRACK, DELETE_FAVOURITE_TRACK } from '../actions/types';

const mockData = [
  { 
    song: 'Mistakes',
    artist: 'Wayshrine',
    fusion: 'Indie Bad'
  },
  { 
    song: 'Before',
    artist: 'Wayshrine',
    fusion: 'Prog Bad'
  },
  { 
    song: 'Wanted',
    artist: 'Wayshrine',
    fusion: 'Metal GREAT'
  },
]

export default(state = mockData, action) => {
  let newState = [...state]

  switch(action.type) {
    case ADD_FAVOURITE_TRACK:
      // payload track to be added
      newState.push(action.payload);
      return newState;
    case DELETE_FAVOURITE_TRACK:
      // payload is index to remove
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}