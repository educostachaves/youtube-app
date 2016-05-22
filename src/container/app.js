import React, { Component } from 'react';
import { connect } from 'react-redux';

import Videos from '../components/videos';
import Search from '../components/search';

import { getVideos } from '../actions';

// Stylesheets
require('../../assets/style/app.scss');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    this.props.getVideos(this.state.videos);
  }

  render() {
    return (
      <div>
        <Search getVideos={this.props.getVideos} />
        <Videos data={this.props.videos}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getVideos: (search) => {
      dispatch(getVideos(search))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
