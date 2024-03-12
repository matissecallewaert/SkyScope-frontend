import React, {useState, useEffect} from "react";
import "./object.css";
import ContextMenu from "../../context-menu/context-menu";

function Object({ object_name, onDelete }) {
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleDelete = () => {
    onDelete(object_name);
    setContextMenu({ ...contextMenu, visible: false });
  };

  const handleClick = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [contextMenu]);

  return (
    <div>
      <div className="card" onContextMenu={handleRightClick}>
        <div className="text">
          <span>{object_name}</span>
        </div>
      </div>
      <ContextMenu visible={contextMenu.visible} x={contextMenu.x} y={contextMenu.y} onDelete={handleDelete} />
    </div>
  );
}

export default Object;
