import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { search: '' }

  }

  onInputChange = (event) => {
    this.setState({ search: event.target.value })
  }

  onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    // fetch data
    this.props.fetchWeather(this.state.search);
    this.setState({ search: ''}); // empty input field
  }

  render() {
    console.log(this.state.search)

    return (
      <div>
        <form className="input-group" onSubmit={this.onSubmit}>
          <input className="form-control"
                 value={this.state.search}
                 onChange={this.onInputChange}
                 placeholder="Search for a city"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn">Submit</button>
          </span>
        </form>      
      </div>
    );
  }
}

function mapDispacthToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispacthToProps)(SearchBar);