import React from "react";

const ImagesList = props => {
  const images = props.images.map(({ id, description, urls }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
  return <div>{images}</div>;
};

export default ImagesList;
