import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CitiesList from '../containers/cities_list';


export default class App extends Component {
  render() {
    const style = { color: '#3B5998' }
    return (
      <div>
        <h1 style={style}>FB_Weather</h1>
        <SearchBar />
        <CitiesList />
      </div>
    );
  }
}
