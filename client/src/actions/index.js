import axios from 'axios';
import { FETCH_TRACKS } from './types';

export const fetchTracks = genres => async dispatch => {
  console.log('fetchTracks pre-dispatched')
  const res = await axios.get(`/api/tracks?fusion=${genres}`);

  dispatch({ type: FETCH_TRACKS, payload: res.data });
}
