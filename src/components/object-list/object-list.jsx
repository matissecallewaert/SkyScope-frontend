import React, { useState, useEffect } from "react";
import "./object-list.css";
import Object from "./object/object";

function ObjectList() {
  const [objects, setObjects] = useState([]);

  const fetchObjectList = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/get-object-list");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setObjects(data);
    } catch (error) {
      console.error("Could not fetch object list: ", error);
    }
  };

  useEffect(() => {
    fetchObjectList();
  }, []);

  return (
    <div className="object_list">
      <ul>
        {objects.map((item, _) => (
          <Object object_name={item}/>
        ))}
      </ul>
    </div>
  );
}

export default ObjectList;