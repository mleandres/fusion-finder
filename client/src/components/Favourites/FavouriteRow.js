import React from 'react';
import DeleteButton from '../utility/DeleteButton';

const FavouriteRow = ({ artist, song, fusion }) => {
  return (
    <tr>
      <td>{artist}</td>
      <td>{song}</td>
      <td>{fusion}</td>
      <td>
        <DeleteButton onClick={() => {console.log("click")}} />
      </td>
    </tr>
  );
};

export default FavouriteRow