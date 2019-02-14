import React from 'react';

const SpotifyShower = ({ children, spotifyId, title }) => {
  const uri = 'spotify:track:' + spotifyId;
  const size = {
    width: '100%',
    height: '100%'
  };
  const view = 'coverart';
  const containerClassName = 'ui embed'
  const outerStyle = { padding: '1em' }

  return (
    <div style={outerStyle}>
      {children}
      <div className={containerClassName}>
        <iframe
          title="Spotify"
          src={`https://embed.spotify.com/?uri=${uri}&view=${view}`}
          width={size.width}
          height={size.height}
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
      <h2>{title ? title : ''}</h2>
    </div>
  );
};

export default SpotifyShower;
