import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image search</label>
            <input type="text" placeholder="Search here" className="" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
