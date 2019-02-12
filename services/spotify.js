const axios = require('axios');

const spotifyTokenAddress = 'https://accounts.spotify.com/api/token'

function getSpotifyToken () {
  console.log('making request to spotify')
  axios.post(spotifyTokenAddress, )
}

module.exports = {
  getSpotifyToken
}
