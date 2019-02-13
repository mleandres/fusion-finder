import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTracks } from '../../actions';
import { capitalizeArray } from '../../utils/helpers';

import VideoShower from '../VideoShower/VideoShower';
import SelectableButtonGroup from '../SelectableButtonGroup';

import styles from './GenrePicker.module.css';


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

  componentDidUpdate () {
    if (this.state.showVideo || this.state.dataError) {
      this.scrollToVideoDiv();
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
      if (fusionSongs) {
        // pick a random song to show
        const index = Math.floor(Math.random() * fusionSongs.length);
        const fusion = fusionSongs[index];

        // set state of component to show a song
        this.setState({
          fusionPicked: capitalizeArray(fusionArray).join(' '),
          showVideo: true,
          video: {
            id: fusion.youtubeId,
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
        showVideo: false,
        dataError: false
      })
    }
  }

  scrollToVideoDiv = () => {
    this.videoDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
        buttonClassName="column"
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
        <div className="ui placeholder segment" ref={(el) => { this.videoDiv = el; }}>
          {this.renderVideoSegment()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ token }) => {
  return { token };
}

export default connect(mapStateToProps, { fetchTracks })(GenrePicker);
