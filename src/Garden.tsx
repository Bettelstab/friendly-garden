import React from "react";
import { Stage, Layer, Text } from "react-konva";

import { ColoredRect } from './ColoredRect';
import { Plant } from "./Plant";
import { PlantData } from "./types/PlantData";

export const Garden = () => {
  const [plants, setPlants] = React.useState<PlantData[]>([]);

  const addPlant = () => setPlants((plants) => [
    ...plants,
    { name: "Carot", color: "red", x: 0, y: 0, radius: 50 },
  ]);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={addPlant}
    >
      <Layer>
        <Text text="Try click on rect" />
        <ColoredRect />
        { plants.map(plant => <Plant plant={plant} />) }
      </Layer>
    </Stage>
  );
};
