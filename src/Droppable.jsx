import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import './App.css'; // Import the CSS file for styles

export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const style = {
    backgroundColor: isOver ? 'lightgreen' : 'white',
    padding: '20px',
    border: '1px solid black',
    minHeight: '500px',
    width: '100%',
    overflowY: 'auto',
  };

  return (
    <div ref={setNodeRef} style={style} className="droppable-area">
      {children}
    </div>
  );
}
