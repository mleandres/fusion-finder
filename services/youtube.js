const { google } = require('googleapis')
const keys = require('../config/keys')

// track object has name and artist properties
async function getYoutubeLinksFromTracks (tracks) {
  const newTracks = await Promise.all(
    tracks.map(track => {
      const youtubeId = getYoutubeLink(track.artist, track.name);
      return {
        ...track,
        youtubeId
      };
    })
  );
  return newTracks;
};

async function getYoutubeLink (artist, song) {
  const youtube = google.youtube({
    version: 'v3',
    auth: keys.youtubeApiKey
  });
  const query = `${artist} - ${song}`;
  try {
    const res = await youtube.search.list({
      part: 'id',
      type: 'video',
      maxResults: 1,
      q: query,
    });
    console.log(res.data)
    // return res.data.items[0].id.videoId;
  } catch(err) {
    console.log(err.errors[0].message);
  }
}

module.exports = {
  getYoutubeLinksFromTracks,
  getYoutubeLink
};
