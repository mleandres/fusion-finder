import React from 'react';
import { connect } from 'react-redux';
import { addTrackToFavourites, deleteTrackFromFavourites } from '../../actions'

import DeleteButton from '../utility/DeleteButton';

const FavouriteRow = ({ artist, song, fusion, index, deleteTrackFromFavourites }) => {
  const deleteFavourite = () => {
    deleteTrackFromFavourites(index);
  };

  return (
    <tr>
      <td>{artist}</td>
      <td>{song}</td>
      <td>{fusion}</td>
      <td>
        <DeleteButton onClick={deleteFavourite.bind(this)} />
      </td>
    </tr>
  );
};

export default connect(null, { deleteTrackFromFavourites })(FavouriteRow);
