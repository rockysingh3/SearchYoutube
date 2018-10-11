import React, { Component } from 'react';
import ReactDom from 'react-dom';


// internal files
import SearchBar from './Components/search_bar';
import APIKEY from './helper/config';

class App extends Component {
  render(){
    return (
      <SearchBar/>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));