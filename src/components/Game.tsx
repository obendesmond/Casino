import React from "react";
import { gameType } from "../App";
import { Image, JackPot, SingleGame, SingleGame2 } from "../styles";

interface GameProps {
  game: gameType;
  selectedCat: string;
}

const Game: React.FC<GameProps> = ({ game, selectedCat }) => {
  const { image, name, amount, categories } = game;

  const ribbonData = () => {
    if (selectedCat === "new") return categories.includes("top") ? "top" : "";
    else if (selectedCat === "top")
      return categories.includes("new") ? "new" : "";
    else {
      return categories.includes("new")
        ? "new"
        : categories.includes("top")
        ? "top"
        : "";
    }
  };

  const rib = ribbonData();

  return rib ? (
    <SingleGame data-ribbon={rib}>
      {amount && <JackPot>£ {amount}</JackPot>}
      <Image src={image} alt={name} />
    </SingleGame>
  ) : (
    <SingleGame2>
      {amount && <JackPot>£ {amount}</JackPot>}
      <Image src={image} alt={name} />
    </SingleGame2>
  );
};
// £

export default Game;
