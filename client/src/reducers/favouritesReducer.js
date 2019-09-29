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
  switch(action.type) {
    case ADD_FAVOURITE_TRACK:
      // payload track to be added
      return state.push(action.payload);
    case DELETE_FAVOURITE_TRACK:
      // payload is index of track to remove
      return state.splice(action.payload, 1);
    default:
      return state;
  }
}