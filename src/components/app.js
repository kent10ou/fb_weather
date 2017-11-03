import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';


export default class App extends Component {
  render() {
    return (
      <div>
        <div>FB_Weather</div>
        <SearchBar />
      </div>
    );
  }
}
