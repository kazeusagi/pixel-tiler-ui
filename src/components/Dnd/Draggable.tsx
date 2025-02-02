'use client';
import { css } from '@emotion/react';
import { useState } from 'react';

export function Draggable() {
  const [dragging, setDragging] = useState(false);

  const style = css({
    width: '100px',
    height: '100px',
    border: '1px solid black',
    backgroundColor: dragging ? 'red' : 'white',
  });

  return (
    <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd} className={style.name}>
      Drag me
    </div>
  );

  function onDragStart(event: React.DragEvent<HTMLDivElement>) {
    setDragging(true);
    event.dataTransfer.setData('text/plain', 'dragging');
  }

  function onDragEnd() {
    setDragging(false);
  }
}
