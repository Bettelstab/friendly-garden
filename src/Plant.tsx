import React from "react";
import { Circle } from "react-konva";
import { PlantData } from "./types/PlantData";

type Props = {
  plant: PlantData;
};

export const Plant = ({ plant }: Props) => {
  return (
    <Circle
      x={plant.x}
      y={plant.y}
      draggable
      radius={plant.radius}
      fill={plant.color}
    />
  );
};
