import React from "react";
import "./ImageRow.css";

function ImageRow(props) {
  return (
    <div className="images-container">
      {props.images.map((image) => (
        <div className="image-item">
          <img src={image} />
        </div>
      ))}
    </div>
  );
}

export default ImageRow;
