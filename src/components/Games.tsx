import React from "react";
import { gameType } from "../App";
import { GamesContainer } from "../styles";
import Game from "./Game";

type Props = {
  games: gameType[];
  selectedCat: string;
};

const Games = ({ games, selectedCat }: Props) => {
  return (
    <GamesContainer>
      {games.map(game => (
        <Game selectedCat={selectedCat} key={game.id} game={game} />
      ))}
    </GamesContainer>
  );
};

export default Games;
