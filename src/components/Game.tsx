import React from "react";
import { gameType } from "../App";
import { Image, JackPot, SingleGame, SingleGame2, Title } from "../styles";

interface GameProps {
  game: gameType;
  selectedCat: string;
}

const Game: React.FC<GameProps> = ({ game, selectedCat }) => {
  const { image, name, amount, categories } = game;

  const ribbonData = () => {
    if (selectedCat === "new") return categories.includes("top") ? "TOP" : "";
    else if (selectedCat === "top")
      return categories.includes("new") ? "NEW" : "";
    else {
      return categories.includes("new")
        ? "NEW"
        : categories.includes("top")
        ? "TOP"
        : "";
    }
  };

  const rib = ribbonData();
  const Content = (
    <>
      {amount && <JackPot>£ {amount}</JackPot>}
      <Title>
        <div className="con">
          <p style={{ fontSize: "40px" }}>▶</p>
          <p>{name}</p>
        </div>
      </Title>
      <Image src={image} alt={name} />
    </>
  );

  return rib ? (
    <SingleGame data-ribbon={rib}>{Content}</SingleGame>
  ) : (
    <SingleGame2>{Content}</SingleGame2>
  );
};
// £

export default Game;
