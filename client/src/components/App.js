import React from 'react';

import GenrePicker from './GenrePicker/GenrePicker';
import NoticeBanner from './NoticeBanner';

import fusions from '../common/songs.json';
import genres from '../common/genres.json';

const App = () => {
  return (
    <div>
      <NoticeBanner text="Work in Progress"/>
      <div className="ui container column">
        <div style={{ margin: '1em' }}>
          <h1>Fusion Finder</h1>
        </div>
        <GenrePicker genres={genres} fusions={fusions}/>
      </div>
    </div>
  );
};

export default App;
