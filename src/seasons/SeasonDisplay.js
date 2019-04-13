import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    iconClass: "sun",
    text: "Lets hit the beach"
  },
  winter: {
    iconClass: "snowflake",
    text: "Burr, its chilly"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { iconClass, text } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconClass} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconClass} icon`} />
    </div>
  );
};

export default SeasonDisplay;
