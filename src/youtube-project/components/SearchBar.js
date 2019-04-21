import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSearchChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onSearchSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <div className="field">
            <label htmlFor="videoSearch">Video Search</label>
            <input
              name="videoSearch"
              type="text"
              value={this.state.term}
              onChange={this.onSearchChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
