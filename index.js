const express = require('express');
const app = express();

const spotify = require('./services/spotify');

// spotify.getSpotifyToken();

require('./routes/authRoutes')(app);
require('./routes/songRoutes')(app);

const getTracksTest = async () => {
  const token = await spotify.getSpotifyToken();
  const genres = 'electronic,metal';
  const tracks = await spotify.getTracksFromGenreSeed(token, genres);
  console.log(tracks);
}

const getArtistsTest = async () => {
  const token = await spotify.getSpotifyToken();
  const track = await spotify.getTrackId(token, 'Eagle vs Crows Dance Gavin Dance');
  console.log(track);
};

// getArtistsTest();
// getTracksTest();

if (process.env.NODE_ENV === 'production') {
  // need express to serve static client 
  app.use(express.static('client/build'));

  const path = require('path');
  // catch all path to redirect to client application in prod
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = process.env.PORT || 5000;
app.listen(PORT);
