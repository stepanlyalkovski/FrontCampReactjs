import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input className="validate" id="postsFilter" type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Filter by author..."/>
          <label htmlFor="postsFilter">Filter posts</label>
        </div>
      </div>
    );
  }
}


export default SearchBar;