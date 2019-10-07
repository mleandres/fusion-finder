import React from 'react';
import { connect } from 'react-redux';
import styles from './FavouritesTable.module.css';
import FavouriteRow from './FavouriteRow';

const FavouritesTable = ({ favourites }) => {
  const renderRows = data => {
    return data.map(({ song, artist, fusion }, i) => {
      return <FavouriteRow song={song} artist={artist} fusion={fusion} index={i} key={i} />;
    });
  };

  const renderTable = () => {
    if (favourites.length > 0) {
      return (
        <table className="ui very basic unstackable fixed table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Artist</th>
              <th>Fusion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {renderRows(favourites)}
          </tbody>
        </table>
      );
    } else {
      return (
        <h4>You have no favourites... yet...</h4>
      );
    }
  };

  return (
    <div className={`ui container ${styles.favourites}`}>
      <h3>Favourites</h3>
      {renderTable()}
    </div>
  );
}

const mapStateToProps = ({ favourites }) => {
  return { favourites };
}

export default connect(mapStateToProps, null)(FavouritesTable);
