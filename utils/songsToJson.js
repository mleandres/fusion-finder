const fs = require('fs');
const csv = require('csvtojson');
const { getSpotifyToken, getTrackId } = require('../services/spotify');

const songsDataPath = '../common/data/fusion_songs.csv';

async function csvToArray (path) {
  const spotifyToken = await getSpotifyToken();
  const jsonArray = await csv().fromFile(path);
  const songsArray = await Promise.all(
    jsonArray.map(async row => {
      const spotifyId = await getTrackId(spotifyToken, row.song + ' ' + row.artist);
      const newEntry = {
        fusion: row.fusion.split(' ').sort().join(' ').toLowerCase(),
        artist: row.artist,
        song: row.song,
        spotifyId
      };
      return newEntry;
    })
  );
  return songsArray;
}

// adds the details of item to the object
function createSongsObject (obj, item) {
  const newEntry = Object.assign({}, item);

  if (obj[item.fusion]) {
    obj[item.fusion].append(newEntry);
  } else {
    obj[item.fusion] = [newEntry];
  }
}

function csvToJson (csvPath, jsonPath) {
  const songsArray = csvToArray(csvPath);
  songsArray.then(arr => {

    // for each song array, add it to the song object hash
    let tempObj = {};
    arr.forEach(item => {
      createSongsObject(tempObj, item);
    })

    // now want to take songs object, stringify it, and write it to a file
    fs.writeFile(jsonPath, JSON.stringify(tempObj, null, 2), (err) => {
      if (err) return console.log(err);
      console.log(`Created file at ${jsonPath}`);
    });
  });
}

csvToJson(songsDataPath, '../common/data/songs.json')