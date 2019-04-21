import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const list = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div>{list}</div>;
};

export default VideoList;
