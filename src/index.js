import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

// internal files
import SearchBar from './Components/search_bar';
import APIKEY from './helper/config';

let term = 'fight';
YTSearch({Key: APIKEY, term: term}, (data) => {
  console.log(data);
});



class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] }

    YTSearch({Key: APIKEY, term: term}, (data) => {
      this.setState({ videos: data });
    });

  }

  render(){
    return (
      <SearchBar/>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));