import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import './App.css'; // Import the CSS file for styles

export function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        marginBottom: '10px',
        cursor: 'scroll',
      }
    : { marginBottom: '10px', cursor: 'move' };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="draggable-item">
      {children}
    </div>
  );
}
