import axios from 'axios';
import { FETCH_TRACKS, FETCH_SPOTIFY_TOKEN, FETCH_ALL_TRACKS, ADD_FAVOURITE_TRACK, DELETE_FAVOURITE_TRACK } from './types';

export const fetchTracks = (genres) => async (dispatch, getState) => {
  const res = await axios.get(`/api/tracks`, {
    params: {
      token: getState().token,
      fusion: genres
    }
  });

  dispatch({ type: FETCH_TRACKS, payload: res.data });
};

export const fetchAllTracks = () => async dispatch => {
  const res = await axios.get('/api/allTracks');
  
  dispatch({ type: FETCH_ALL_TRACKS, payload: res.data });
}

export const fetchSpotifyToken = () => async dispatch => {
  const res = await axios.get('/api/auth');
  
  dispatch({ type: FETCH_SPOTIFY_TOKEN, payload: res.data });
};

export const addTrackToFavourites = track => dispatch => {
  console.log(track)
  dispatch({ type: ADD_FAVOURITE_TRACK, payload: track });
};

export const deleteTrackFromFavourites = index => dispatch => {
  dispatch({ type: DELETE_FAVOURITE_TRACK, payload: index });
};
