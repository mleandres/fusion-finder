import React, { Component } from 'react';

import { capitalizeArray, shuffle } from '../../utils/helpers';

import SpotifyShower from '../SpotifyShower';
import SelectableButtonGroup from '../SelectableButtonGroup';

import styles from './GenrePicker.module.css';
import AnotherButton from './AnotherButton';
import AddToFavouritesButton from '../Favourites/AddToFavouritesButton';

class GenrePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fusionPicked: '',
      showMedia: false,
      mediaQueue: [],
      queueIndex: 0,
      dataError: false
    };

    this.maxGenres = 2;

    this.handleSelected = this.handleSelected.bind(this);
    this.showAnother = this.showAnother.bind(this);
  }

  componentDidUpdate () {
    if (this.state.showMedia || this.state.dataError) {
      this.scrollToMediaDiv();
    }
  }

  // function to pass into SelectableButtonGroup component
  // get info to display for SpotifyShower when 2 genres are selected
  handleSelected (genresSelected, numSelected) {
    // if correct number of genres is selected
    if (numSelected === this.maxGenres) {
      // find out what fusion was selected
      const fusionArray = Object.keys(genresSelected).sort();
      const fusion = fusionArray.join(' ').toLowerCase();
      
      // get list of tracks from props:
      const tracksList = this.props.fusions[fusion];
      
      if (tracksList) {
        // shuffle tracklist
        shuffle(tracksList);

        // update state
        this.setState({
          fusionPicked: capitalizeArray(fusionArray).join(' '),
          showMedia: true,
          mediaQueue: tracksList,
          queueIndex: 0
        });
      } else {
        this.setState({
          dataError: true
        })
      }
    } else {
      this.setState({
        showMedia: false,
        dataError: false
      });
    }
  }

  showAnother () {
    let newIndex = this.state.queueIndex;
    if (newIndex + 1 === this.state.mediaQueue.length) {
      newIndex = 0;
    } else {
      newIndex += 1;
    }
    this.setState({
      queueIndex: newIndex
    })
    console.log(newIndex);
  }

  scrollToMediaDiv = () => {
    this.mediaDiv.scrollIntoView({ behavior: 'smooth' });
  }

  renderMediaSegment (showMedia, queue, index) {
    if (showMedia) {
      const track = queue[index];
      const title = track.artist + ' - ' + track.song;

      return (
        <div className="center aligned">
          <SpotifyShower spotifyId={track.spotifyId} title={title}>
            <h1>{this.state.fusionPicked}</h1>
          </SpotifyShower>
          <AnotherButton handleClick={this.showAnother} />
          <br />
          <AddToFavouritesButton handleClick={() => {console.log("ADDED TO FAVOURITES")}} />
        </div>
      );
    } else if (this.state.dataError) {
      return <h2 className={styles.centered}>I got nothing... Try another pair!</h2>
    } else {
      return <h2 className={styles.centered}>Select two genres above!</h2>;
    }
  }

  renderGenreButtons () {
    return (
      <SelectableButtonGroup 
        items={this.props.genres}
        handleSelected={this.handleSelected}
        buttonClassName="column centered"
      />
    );
  }

  render () {
    return (
      <div className="ui container">
        <div className="ui four column doubling grid">
          {this.renderGenreButtons()}
        </div>
        <br />
        <div className="ui placeholder segment" ref={(el) => { this.mediaDiv = el; }}>
          {this.renderMediaSegment(this.state.showMedia, this.state.mediaQueue, this.state.queueIndex)}
        </div>
      </div>
    )
  }
}

export default GenrePicker;
