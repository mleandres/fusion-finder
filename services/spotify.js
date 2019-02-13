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

module.exports = {
  getSpotifyToken
}