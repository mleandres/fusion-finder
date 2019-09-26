import React from 'react';
import styles from './FavouritesTab.module.css';

const FavouritesTab = props => {
  return (
    <div className={styles.favourites}>
      <table className="ui very basic table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Fusion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Mistakes
            </td>
            <td>
              Wayshrine
            </td>
            <td>
              ASHES... MISTAKES...
            </td>
            <td>
              <button className="ui icon basic button">
                <i className="red trash alternate icon"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              Before
            </td>
            <td>
              Wayshrine
            </td>
            <td>
              NOTHING FEELS AS GOOD AS BEFORE
            </td>
            <td>
              <button className="ui icon basic button">
                <i className="red trash alternate icon"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              Wanted
            </td>
            <td>
              Wayshrine
            </td>
            <td>
              I NEVER WANTED
            </td>
            <td>
              <button className="ui icon basic button">
                <i className="red trash alternate icon"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FavouritesTab;
