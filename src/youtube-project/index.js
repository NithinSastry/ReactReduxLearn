import React from "react";
import SearchBar from "./components/SearchBar";
import YoutubeSearch from "./api/youtube-search";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = { videos: [] };
  onSearchSubmit = async term => {
    const response = await YoutubeSearch.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
