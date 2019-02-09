import React from 'react';
import Youtube from 'react-youtube';
import styles from './VideoShower.module.css'

const VideoShower = props => {
  const options = {
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className={styles.video}>
      {props.children}
      <Youtube
        containerClassName="ui embed"
        videoId={props.videoId}
        opts={options}
      />
      {props.title ? <h2>{props.title}</h2> : ''}
    </div>
  );
};

export default VideoShower;
