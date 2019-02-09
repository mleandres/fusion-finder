import React, { Component } from 'react';
import VideoShower from '../VideoShower/VideoShower';
import SelectableButton from '../SelectableButton';
import styles from './GenrePicker.module.css';

class GenrePicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      genresPicked: {},
      numPicked: 0
    };

    this.submitGenres = this.submitGenres.bind(this);
    this.handleGenrePick = this.handleGenrePick.bind(this);
  }

  // selected is bool, value is string
  handleGenrePick (selected, value, text) {
    if (selected) {
      let newGenre = {};
      newGenre[value] = text;
      const newPicked = { ...this.state.genresPicked, ...newGenre };
      this.setState({ genresPicked: newPicked, numPicked: this.state.numPicked + 1 });
    } else {
      let newPicked = Object.assign({}, this.state.genresPicked)
      delete newPicked[text];
      this.setState({ genresPicked: newPicked, numPicked: this.state.numPicked - 1 });
    }
  }

  renderVideoSegment () {
    if (this.state.numPicked === 2) {
      const fusionArray = Object.keys(this.state.genresPicked).sort();
      const fusionKey = fusionArray.join(' ').toLowerCase();
      const fusionSongs = this.props.fusions[fusionKey];
      if (fusionSongs) {
        const index = Math.floor(Math.random() * fusionSongs.length);
        const fusion = fusionSongs[index];
        return (
          <div>
            <VideoShower videoId={fusion.youtubeId} title={fusion.artist + ' - ' + fusion.song}>
              <h1>{fusionArray.join(" ")}</h1>
            </VideoShower>
            <br />
          </div>
        );
      } else {
        return <h2 className={styles.centered}>Something went wrong... :(</h2>
      }
    } else {
      return <h2 className={styles.centered}>Select two genres above!</h2>;
    }
  }

  renderGenreButtons () {
    return this.props.genres.map(genre => {
      return (
        <div className="column" key={genre}>
          <SelectableButton
            handleSelection={this.handleGenrePick}
            text={genre}
            value={genre}
            disabled={this.state.numPicked === 2 && !this.state.genresPicked[genre] ? true : false}
          />
        </div>
      );
    })
  }

  submitGenres () {
    this.setState({ didSubmit: true });
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

export default GenrePicker;
