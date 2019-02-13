const spotify = require('../services/spotify');

module.exports = app => {
  app.get('/api/auth', (req, res) => {
    spotify.getSpotifyToken()
      .then(token => {
        res.send(token);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}