import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { searchStr: '' }

  }

  onInputChange = () => {
    this.setState({ searchStr: event.target.value })
  }

  render() {
    console.log(this.state.searchStr)
    
    return (
      <div>
        <form className="input-group" onSubmit={this.onSubmit}>
          <input className="form-control"
                 value={this.state.searchStr}
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

export default SearchBar;