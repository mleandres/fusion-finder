const spotify = require('../services/spotify');
const youtube = require('../services/youtube');
const fusions = require('../common/data/songs.json')

module.exports = app => {
  app.get('/api/tracks', async (req, res, next) => {
    const token = req.query.token;
    const fusion = req.query.fusion;
    if (!token) {
      res.status(401)
      res.send('No authentication provided');
    } else if (!fusion) {
      res.status(400);
      res.send('Must specify fusion parameter.');
    } else {
      if (!fusions[fusion]) {
        res.status(400);
        res.send('Something wrong with fusion parameter')
      } else {
        // grab spotify tracks here :)
        try {
          const tracks = await spotify.getTracksFromTrackSeed(token, fusions[fusion][0].spotifyId);
          const resp = await youtube.getYoutubeLinksFromTracks(tracks);
          res.send(resp);
        } catch(err) {
          // console.log(err);
          next(err)
        }
      }
    }
  });

  app.get('/api/allTracks', async (req, res) => {
    // first get token
    const token = await spotify.getSpotifyToken();
    let result = {};
    // iterate through available fusions
    for (let fusion in fusions) {
      if (fusions.hasOwnProperty(fusion)) {

        // want to make a new dict/object with the format:
        /*
          fusions: {
            <fusion1>: {
              tracks: [
                <trackinfo>
              ]
            },
            <fusion2>: ...
          }
        */

        const seedTrack = fusions[fusion][0];
        const trackNums = 9;

        let tracksInfo = await spotify.getTracksFromTrackSeed(token, seedTrack.spotifyId, trackNums);
        
        // also add seed track
        tracksInfo.push(seedTrack);

        // add array to results
        result[fusion] = tracksInfo;
      }
    }

    res.send(result);
  });
};
