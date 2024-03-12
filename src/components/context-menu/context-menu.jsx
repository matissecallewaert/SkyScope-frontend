import React from 'react';
import './context-menu.css';

const ContextMenu = ({ visible, x, y, onDelete }) => {
  if (!visible) return null;

  return (
    <div className="context-menu" style={{ top: y, left: x }}>
      <ul>
        <li onClick={onDelete}>Delete{'\u00A0\u00A0\u00A0\u00A0'}🔥</li>
        {/* Add more context menu items here */}
      </ul>
    </div>
  );
};

export default ContextMenu;
