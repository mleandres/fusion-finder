import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoticeBanner from './NoticeBanner';
import Header from './Header';
import GenrePicker from './GenrePicker/GenrePicker';
import Footer from './Footer';
import { fetchSpotifyToken } from '../actions/';

import fusions from '../common/songs.json';
import genres from '../common/genres.json';
import Loading from './Loading';

const renderApp = loaded => {
  if (loaded) {
    return (
      <div className="ui">
        <Header />
        <GenrePicker genres={genres} fusions={fusions}/>
        <Footer />
      </div>
    );
  } else {
    return <Loading />
  }
}

class App extends Component {
  componentDidMount () {
    this.props.fetchSpotifyToken();
  }
  
  renderApp () {
    if (this.state.token) {
      return (
        <div className="ui">
          <Header />
          <GenrePicker genres={genres} fusions={fusions}/>
          <Footer />
        </div>
      );
    } else {
      return <Loading />
    }
  }
  
  render () {
    return (
      <div>
        <NoticeBanner text="Work in Progress"/>
        {renderApp(this.props.token)}
      </div>
    );
  }
};

const mapStateToProps = ({ token }) => {
  return { token };
}

export default connect(mapStateToProps, { fetchSpotifyToken })(App);
