import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoticeBanner from './NoticeBanner';
import Header from './Header';
import GenrePicker from './GenrePicker/GenrePicker';
import Footer from './Footer';
import { fetchAllTracks, initializeFavourites } from '../actions/';

import genres from '../common/genres.json';
import Loading from './Loading';
import FavouritesTable from './Favourites/FavouritesTable';

class App extends Component {
  componentDidMount () {
    this.props.fetchAllTracks();
    this.props.initializeFavourites();
  }
  
  renderApp (loadedCriteria) {
    if (loadedCriteria) {
      return (
        <div className="ui">
          <Header />
          <GenrePicker genres={genres} fusions={this.props.tracks}/>
          <FavouritesTable />
          <Footer />
        </div>
      );
    } else {
      return <Loading />
    }
  }
  
  render () {
    // console.log(this.props.tracks);
    return (
      <div>
        <NoticeBanner text="Work in Progress"/>
        {this.renderApp(this.props.tracks)}
      </div>
    );
  }
};

const mapStateToProps = ({ tracks }) => {
  return { tracks };
}

export default connect(mapStateToProps, { fetchAllTracks, initializeFavourites })(App);
