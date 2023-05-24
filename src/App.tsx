import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import axios from "axios";
import Game from "./components/Game";
import Header from "./components/Header";

axios.defaults.baseURL = "http://stage.whgstage.com/front-end-test";

export type gameType = {
  categories: string[];
  id: string;
  image: string;
  name: string;
  amount?: number;
};
type jackpotType = { game: string; amount: number };

const App: React.FC = () => {
  const [games, setGames] = useState<gameType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const otherCategories: readonly string[] = ["ball", "virtual", "fun"];

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    const { data } = await axios.get("/games.php");
    const { data: jackpots } = await axios.get("/jackpots.php");

    const rawGames: gameType[] = data;
    const rawJackpots: jackpotType[] = jackpots;
    const rawCategories: string[] = [];

    // loop through games
    rawGames.map(g => {
      //loop through game categories
      g.categories.forEach(c => {
        // if rawCategories doesn't already include category then add it
        if (!rawCategories.includes(c) && !otherCategories.includes(c))
          rawCategories.push(c);
        if (!rawCategories.includes("other") && otherCategories.includes(c))
          rawCategories.push("other");
      });

      // loop through jackpots
      rawJackpots.forEach(j => {
        // set amount of game if games id is same as jackpots game property
        if (j.game === g.id) {
          g.amount = j.amount;
        }
      });
    });

    setGames(rawGames);
    setCategories(rawCategories);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      {games.map(game => (
        <Game key={game.id} game={game} />
      ))}
    </ThemeProvider>
  );
};

export default App;
