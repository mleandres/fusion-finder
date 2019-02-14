const axios = require('axios');
const { spotifyClientId, spotifyClientSecret } = require('../config/keys');

async function getSpotifyToken () {
  const url = 'https://accounts.spotify.com/api/token';
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  const auth = {
    username: spotifyClientId,
    password: spotifyClientSecret
  };
  
  const params = {
    grant_type: 'client_credentials'
  };

  try {
    const res = await axios({
      method: 'post',
      url,
      headers,
      auth,
      params
    });
    return res.data.access_token
  } catch(err) {
    throw err;
  }
}

async function getTrackId (token, query) {
  const url = 'https://api.spotify.com/v1/search';
  const headers = { 'Authorization': 'Bearer ' + token }
  const params = {
    q: query,
    type: 'track',
    limit: 1
  };
  const res = await axios({
    url,
    headers,
    params
  });

  // const trackInfo = {
  //   name: res.data.tracks.items[0].name,
  //   id: res.data.tracks.items[0].id,
  //   artist: res.data.tracks.items[0].artists[0].name
  // }

  return res.data.tracks.items[0] !== undefined ? res.data.tracks.items[0].id : null;
}

async function getTracksFromTrackSeed (token, trackId, limit) {
  const url = 'https://api.spotify.com/v1/recommendations';
  const headers = { 'Authorization': 'Bearer ' + token };
  const max_popularity = 70;
  const min_popularity = 20;
  // const target_popularity = Math.floor(Math.random()* (max_popularity - min_popularity + 1)) + min_popularity;
  const params = {
    seed_tracks: trackId,
    max_popularity,
    min_popularity,
    limit
  };

  const res = await axios({
    url,
    headers,
    params
  });

  let tracks = res.data.tracks.map(track => {
    return {
      artist: track.artists[0].name,
      song: track.name,
      spotifyId: track.id
    };
  });

  return tracks
};

async function getTracksFromGenreSeed (token, genres) {
  const url = 'https://api.spotify.com/v1/recommendations';
  const headers = { 'Authorization': 'Bearer ' + token };
  const params = {
    seed_artists: '4NHQUGzhtTLFvgF5SZesLK'
  };

  const res = await axios({
    url,
    headers,
    params
  });

  const tracks = res.data.tracks.map(track => {
    return {
      artist: track.artists[0].name,
      song: track.name
    };
  });

  return tracks;
}

module.exports = {
  getSpotifyToken,
  getTracksFromTrackSeed,
  getTrackId
}