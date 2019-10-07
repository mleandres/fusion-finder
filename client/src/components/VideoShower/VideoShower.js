import React from 'react';
import Youtube from 'react-youtube';
import styles from './VideoShower.module.css';

const VideoShower = ({ children, videoId, title }) => {
  const options = {
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className={styles.video}>
      {children}
      <Youtube
        containerClassName="ui embed"
        videoId={videoId}
        opts={options}
      />
      {title ? <h2>{title}</h2> : ''}
    </div>
  );
};

export default VideoShower;
