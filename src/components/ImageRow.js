import React from "react";
import "./ImageRow.css";

function ImageRow(props) {
  return (
    <div className={`images-container ${props.className}-container`}>
      {props.images.map((image) => (
        <div className={`image-item ${props.className}-item`}>
          <img src={image} />
        </div>
      ))}
    </div>
  );
}

export default ImageRow;
