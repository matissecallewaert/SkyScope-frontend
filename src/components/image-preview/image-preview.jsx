import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./image-preview.css";

const ImagePreview = ({ selectedImage}) => {
  return (
    <div className={`image-preview-container`}>
      {selectedImage && (
        <TransformWrapper>
            <TransformComponent>
                <img src={selectedImage} alt="Selected" className="image-preview" />
            </TransformComponent>
        </TransformWrapper>
      )}
    </div>
  );
};

export default ImagePreview;