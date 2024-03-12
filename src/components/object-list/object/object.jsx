import React from "react";
import "./object.css";

function Object({ object_name }) {
  return (
    <div className="card">
      <div className="text">
        <span>{object_name}</span>
      </div>
    </div>
  );
}

export default Object;
