import React, { Component } from 'react';
import VideoDisplay from './VideoDisplay';
import VideoTitle from './VideoTitle';

class VideoContainer extends Component {
  render() {
    return (
      <div className="videoContainer">
         <VideoDisplay />
         <VideoTitle />
      </div>
    );
  }
}

export default VideoContainer;
