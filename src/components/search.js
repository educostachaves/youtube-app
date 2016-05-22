import React, { Component } from 'react';

export default class Search extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.getVideos !== this.props.getVideos;
  }

  render() {
    return (
      <div className="search">
        <div className="search-logo"></div>
        <form onSubmit={this.handleForm.bind(this)}>
          <input
              type="search"
              ref="search"
              className="search-input"
              placeholder="Type what you want and then press Enter"/>
        </form>
      </div>
    )
  }

  handleForm(e) {
   e.preventDefault();
    let search = this.refs.search.value
    this.props.getVideos(search);
    this.refs.search.value = '';
  }
}
