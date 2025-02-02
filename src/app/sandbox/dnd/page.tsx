'use client';

import { Draggable, Droppable } from '@/components/Dnd';
import { Typography } from '@mui/joy';

export default function Page() {
  return (
    <>
      <Draggable />
      <Droppable />
      <Typography level='h4'>DnD</Typography>
    </>
  );
}
