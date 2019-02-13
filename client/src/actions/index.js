import axios from 'axios';
import { FETCH_TRACKS, FETCH_SPOTIFY_TOKEN } from './types';

export const fetchTracks = genres => async (dispatch, getState) => {
  const res = await axios.get(`/api/tracks`, {
    params: {
      token: getState().token,
      fusions: genres
    }
  });

  dispatch({ type: FETCH_TRACKS, payload: res.data });
};

export const fetchSpotifyToken = () => async dispatch => {
  const res = await axios.get('/api/auth');
  
  dispatch({ type: FETCH_SPOTIFY_TOKEN, payload: res.data });
};