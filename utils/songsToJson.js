const fs = require('fs');
const csv = require('csvtojson');
const { getYoutubeLink } = require('./fusionHelper');

const songsDataPath = './common/data/fusion_songs.csv';

async function csvToArray (path) {
  const jsonArray = await csv().fromFile(path);
  const songsArray = await Promise.all(
    jsonArray.map(async row => {
      const youtubeId = await getYoutubeLink(row.artist, row.song);
      const newEntry = {
        fusion: row.fusion.split(' ').sort().join(' ').toLowerCase(),
        artist: row.artist,
        song: row.song,
        youtubeId
      };
      return newEntry;
    })
  );
  return songsArray;
}

function createSongsObject (obj, item) {
  const newEntry = {
    artist: item.artist,
    song: item.song,
    youtubeId: item.youtubeId
  };
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

csvToJson(songsDataPath, 'songs.json');
