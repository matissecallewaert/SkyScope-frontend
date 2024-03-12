import React from "react";
import ImagePreview from "../../components/image-preview/image-preview";
import "./detect.css";
import FileInput from "../../components/file-input/file-input";

function Detect() {
  return (
    <div>
      <ImagePreview></ImagePreview>
      <FileInput/>
    </div>
  );
}

export default Detect;
