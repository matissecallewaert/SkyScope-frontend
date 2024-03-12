import React from "react";
import "./object.css";

function Object({ object_name }) {
  return (
    <div class="box">
      <span></span>
      <div class="content">
        <h2>{object_name}</h2>
      </div>
    </div>
  );
}

export default Object;
