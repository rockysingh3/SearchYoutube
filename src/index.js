import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

// internal files
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import APIKEY from './helper/config';





class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: APIKEY, term: 'fight'}, (videos) => {
      this.setState({ videos });
    });

  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));