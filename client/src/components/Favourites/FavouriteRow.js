import React from 'react';
import { connect } from 'react-redux';
import { deleteTrackFromFavourites } from '../../actions';

import DeleteButton from '../utility/DeleteButton';

const FavouriteRow = ({ artist, song, fusion, index, deleteTrackFromFavourites }) => {
  const deleteFavourite = () => {
    deleteTrackFromFavourites(index);
  };

  return (
    <tr>
      <td>{song}</td>
      <td>{artist}</td>
      <td>{fusion}</td>
      <td>
        <DeleteButton handleClick={deleteFavourite.bind(this)} />
      </td>
    </tr>
  );
};

export default connect(null, { deleteTrackFromFavourites })(FavouriteRow);
