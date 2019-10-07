import React from 'react';

const AnotherButton = ({ handleClick }) => {
  return (
    <button
      className="ui huge negative button"
      onClick={handleClick}
    >
      Show me Another!
    </button>
  );
};

export default AnotherButton;
