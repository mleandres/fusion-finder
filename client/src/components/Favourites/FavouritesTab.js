import React from 'react';
import { connect } from 'react-redux';
import styles from './FavouritesTab.module.css';
import FavouriteRow from './FavouriteRow';

const FavouritesTab = props => {
  const renderRows = data => {
    return data.map(({ song, artist, fusion }, i) => {
      return <FavouriteRow song={song} artist={artist} fusion={fusion} key={i} />;
    });
  };

  return (
    <div className={`ui container ${styles.favourites}`}>
      <h3>Favourites</h3>
      <table className="ui very basic unstackable table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Fusion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {renderRows(props.favourites)}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = ({ favourites }) => {
  return { favourites };
}

export default connect(mapStateToProps, null)(FavouritesTab);
