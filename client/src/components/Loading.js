import React from 'react';

import LoadingSpinner from '../common/media/loading-spinner.svg';

const Loading = () => {
  return (
      <img 
        src={LoadingSpinner} 
        alt="Loading..." 
        className="ui centered image"
      />
  );
};

export default Loading;
