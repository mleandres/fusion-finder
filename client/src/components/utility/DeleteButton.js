import React from 'react';

const DeleteButton = props => {
  return (
    <button 
      className="ui compact icon basic button"
      onClick={props.onClick}
    >
      <i className="red trash alternate icon"></i>
    </button> 
  );
};

export default DeleteButton;