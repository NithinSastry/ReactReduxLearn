import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  return (
    <div>
      <h1>{season === "winter" ? "Burr, its chilly" : "Lets hit the beach"}</h1>
    </div>
  );
};

export default SeasonDisplay;
