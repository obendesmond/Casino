import React from "react";
import { gameType } from "../App";
import { Button } from "../styles";

interface GameProps {
  game: gameType;
}

const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <div>
      <img src={game.image} alt={game.name} />
    </div>
  );
};

export default Game;
