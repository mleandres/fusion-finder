import React from 'react';

const NoticeBanner = props => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'maroon', padding: '0.5em' }}>
      <h3 style={{ color: 'white' }}>{props.text}</h3>
    </div>
  );
};

export default NoticeBanner;
