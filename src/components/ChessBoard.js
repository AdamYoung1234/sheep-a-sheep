import React, { useState } from "react";
import { Stage, Layer } from "react-konva";
import Card from "./Card";
import * as fromConstants from "../utils/constants";

const ChessBoard = ({ assets, map }) => {
  const [cards, setCards] = useState(map);
  const visibleCards = cards.filter(card => card.visible).sort((a, b) => a.layerNum - b.layerNum)

  return (
    <>
      <Stage
        width={fromConstants.CANVAS_WIDTH}
        height={fromConstants.CANVAS_HEIGHT}
      >
        <Layer>
          {visibleCards.map((card) => (
            <Card key={card.id} card={card} assets={assets} onClick={() => {
              card.visible = false
              setCards([...cards, card])
            }} />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default ChessBoard;
