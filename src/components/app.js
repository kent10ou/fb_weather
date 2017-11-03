import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CitiesList from '../containers/cities_list';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>FB_Weather</h1>
        <SearchBar />
        <CitiesList />
      </div>
    );
  }
}
