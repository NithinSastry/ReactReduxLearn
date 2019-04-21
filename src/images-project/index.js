import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";

class Images extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <span>Images count : {this.state.images.length}</span>
      </div>
    );
  }
}

export default Images;
