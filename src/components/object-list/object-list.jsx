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

  const deleteObject = (object_name) => {
    const url = `http://localhost:8000/api/delete-object`;
    console.log(`deleting ${object_name}`)
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ object_name })
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        return response.text();
    })
    .then(() => {
        fetchObjectList();
    })
    .catch((error) => console.error("Error:", error));
};

  return (
    <div className="object_list">
      <ul>
        {objects.map((item, index) => (
          <Object key={index} object_name={item} onDelete={deleteObject}/>
        ))}
      </ul>
    </div>
  );
}

export default ObjectList;