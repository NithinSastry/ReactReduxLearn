import React from "react";
import "./../css/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="item video-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
