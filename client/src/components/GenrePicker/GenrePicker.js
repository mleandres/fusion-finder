import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTracks } from '../../actions';

import VideoShower from '../VideoShower/VideoShower';
import styles from './GenrePicker.module.css';
import SelectableButtonGroup from '../SelectableButtonGroup';


class GenrePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fusionPicked: '',
      showVideo: false,
      video: {
        id: '',
        title: ''
      },
      dataError: false
    };

    this.maxGenres = 2;

    this.handleSelected = this.handleSelected.bind(this);
  }

  renderVideoSegment () {
    if (this.state.showVideo) {
      return (
        <div>
          <VideoShower videoId={this.state.video.id} title={this.state.video.title}>
            <h1>{this.state.fusionPicked}</h1>
          </VideoShower>
          <br />
        </div>
      );
    } else if (this.state.dataError) {
      return <h2 className={styles.centered}>Something went wrong... :(</h2>
    } else {
      return <h2 className={styles.centered}>Select two genres above!</h2>;
    }
  }

  // function to pass into SelectableButtonGroup component
  // get info to display for videoShower when 2 genres are selected
  handleSelected (genresSelected, numSelected) {

    // check if desired number of genres is selected
    if (numSelected === this.maxGenres) {
      const fusionArray = Object.keys(genresSelected).sort();
      const fusionKey = fusionArray.join(' ').toLowerCase();
      const fusionSongs = this.props.fusions[fusionKey];

      // no errors (i.e. at least one track exists for the fusion)
      if (fusionSongs.length > 0) {
        // pick a random song to show
        const index = Math.floor(Math.random() * fusionSongs.length);
        const fusion = fusionSongs[index];

        // set state of component to show a song
        this.setState({
          fusionPicked: fusionArray.join(' '),
          showVideo: true,
          video: {
            id: fusion.videoId,
            title: fusion.artist + ' - ' + fusion.song
          }
        });
      } else {
        // no songs found for the fusion
        this.setState({
          dataError: true
        })
      }
    } else {
      this.setState({
        showVideo: false
      })
    }
  }

  renderGenreButtons () {
    return (
      <SelectableButtonGroup 
        items={this.props.genres}
        handleSelected={this.handleSelected}
        buttonClassName="column"
      />
    );
  }

  render () {
    return (
      <div>
        <div className="ui four column doubling grid">
          {this.renderGenreButtons()}
        </div>
        <br />
        <div className="ui placeholder segment">
          {this.renderVideoSegment()}
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchTracks })(GenrePicker);
