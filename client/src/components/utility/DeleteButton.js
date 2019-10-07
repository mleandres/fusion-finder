import React from 'react';

const DeleteButton = ({ handleClick }) => {
  return (
    <button 
      className="ui compact icon basic button"
      onClick={handleClick}
    >
      <i className="red trash alternate icon"></i>
    </button> 
  );
};

export default DeleteButton;
