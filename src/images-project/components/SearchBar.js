import React from "react";

class SearchBar extends React.Component {
  state = { term: "Sample text" };
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image search</label>
            <input
              type="text"
              placeholder="Search here"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
