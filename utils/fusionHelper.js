const { google } = require('googleapis')
const keys = require('../config/keys')

// function that takes a list of youtube video titles and returns an array of their youtube links
async function getLinksFromTitles (songs) {
  const videos = await Promise.all(
    songs.map(song => {
      const video = getYoutubeLink(song[0], song[1]);
      return video;
    })
  );
  return videos;
}

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
      q: query,
    });
    return res.data.items[0].id.videoId;
  } catch(err) {
    console.log(err.errors[0].message);
  }
}

// i want a function that takes in my genre fusion object and poops out an object mapping fusions to spotify ids

module.exports = {
  getYoutubeLink,
  getLinksFromTitles
};
