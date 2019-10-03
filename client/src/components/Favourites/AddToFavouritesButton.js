import React from 'react';

const AddToFavouritesButton = ({ handleClick }) => {
  return (
    <button
      className="ui medium positive button"
      onClick={handleClick}
    >
      Add To Favourites
    </button>
  )
}

export default AddToFavouritesButton;
