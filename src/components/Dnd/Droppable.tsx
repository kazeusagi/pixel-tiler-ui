import { toast } from 'react-toastify';

export function Droppable() {
  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{
        width: 200,
        height: 200,
        border: '1px solid black',
      }}
    >
      Droppable
    </div>
  );

  function onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    console.log('dropped');
    console.log(event);
    console.log(event.dataTransfer.getData('text/plain'));
    if (event.dataTransfer.getData('text/plain') === 'dragging') {
      toast.success('Dropped');
    }
  }
}
