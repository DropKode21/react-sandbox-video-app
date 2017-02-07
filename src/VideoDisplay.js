import React, { Component } from 'react';
var Video = require('react-video');

const VideoDisplay = (props) => {

    return (
      <div className="videoDisplay" id="video">

        // Video from Youtube
        React.render(
        <Video from='youtube' videoId={videoId} />,
        document.getElementById('#video')
        );
      </div>
    );
  };


export default VideoDisplay;
