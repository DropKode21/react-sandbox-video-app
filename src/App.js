import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import VideoContainer from './VideoContainer';


function getInitialState() {
  return {
      currentVideo: '',
      videoQueue: [],
      searchText: '',
      title: '',
    };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
    this.getVideo = this.getVideo.bind(this);
    this.getThumbs = this.getThumbs.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.state = getInitialState();
  }

  doSearch(text) {
    console.log("before setState", text);

    this.setState({ searchText: text }, function() {
      console.log("SEARCH",this.state.searchText);
    });

  }

  getVideo() {
      // get video
  }

  getThumbs() {
      // get thumbs
  }

  getTitle() {
      // get title
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>youTube... iTube... WeTube!</h2>
        </div>
        <SearchBar doSearch={this.doSearch} searchText={this.state.searchText}/>
        <VideoContainer />
        {/*<QueueBox />*/}
      </div>
    );
  }
}

export default App;
