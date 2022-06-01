import React from 'react';
import { Circle } from 'react-konva';
import Konva from 'konva';

export const ColoredRect = () => {
  const [color, setColor] = React.useState<string>(Konva.Util.getRandomColor());

  return (
    <Circle
      x={0}
      y={0}
      draggable
      radius={50}
      fill={color}
      onDragEnd={() => {
        setColor(Konva.Util.getRandomColor());
      }}
    />
  );
};
