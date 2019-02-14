import React from 'react';

const Another = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="huge negative ui button">
      Show me Another!
    </button>
  );
};

export default Another;
