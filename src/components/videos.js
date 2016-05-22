import React, { Component } from 'react';

import Slider from 'react-slick';
import YouTube from 'react-youtube';

export default class Videos extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const opts = {
      height: '250px',
      width: '100%',
      playerVars: {
        autoplay: 1,
        fs: 0,
        enablejsapi: 1
      }
    };

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <RightNavButton />,
      prevArrow: <LeftNavButton />
    };

    console.log('Component Videos', this.props.data);

    if(!this.props.data) {
      return (
        <section className="videos">
          <div className="message">
            <p>Loading ...</p>
          </div>
        </section>
      )
    } else {
      if (this.props.data.length === 0) {
        return (
          <section className="videos">
            <div className="message">
              <h2>Video not found</h2>
              <p>Try to type another search string.</p>
            </div>
          </section>
        );
      } else {
        return (
          <section className="videos">
            <Slider {...settings}>
              {this.props.data.map(video => (
                <div key={video.id.videoId} className="box-video">
                  <YouTube
                    videoId={video.id.videoId}
                    opts={opts}
                    onReady={this._onReady}
                  />
                </div>
              ))}
            </Slider>
          </section>
        );
      }
    }
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

class LeftNavButton extends React.Component {
  render() {
    return <button {...this.props}></button>
  }
}

class RightNavButton extends React.Component {
  render() {
    return <button {...this.props}></button>
  }
}
