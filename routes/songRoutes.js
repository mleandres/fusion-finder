const spotify = require('../services/spotify');

module.exports = app => {
  app.get('/api/tracks', (req, res) => {
    const token = req.query.token;
    const fusion = req.query.fusion;
    if (!token) {
      res.status(401)
      res.send('No authentication provided');
    } else if (!fusion) {
      res.status(400);
      res.send('Must specify fusion parameter.');
    } else {
      res.send(fusion);
    }
  });
};
