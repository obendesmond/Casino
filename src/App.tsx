import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import axios from "axios";
import Header from "./components/Header";
import Games from "./components/Games";
import Footer from "./components/Footer";

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
  const [allGames, setAllGames] = useState<gameType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const otherCategories: readonly string[] = ["ball", "virtual", "fun"];

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    handleSelectCategory(selectedCategory);
  }, [allGames]);

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

    setCategories(rawCategories);
    // take first category as selected category when app starts
    setSelectedCategory(rawCategories[0]);
    // set all games
    setAllGames(rawGames);

    setGames(rawGames);
  };

  const handleSelectCategory = (c: string) => {
    setSelectedCategory(c); // change category

    // filter games with respect to category
    const newGames = allGames.filter(g => {
      if (c === "other") {
        return (
          g.categories.includes(otherCategories[0]) || // includes ball
          g.categories.includes(otherCategories[1]) || // includes virtual
          g.categories.includes(otherCategories[2]) // includes fun
        );
      } else return g.categories.includes(c);
    });
    setGames(newGames);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        selectedCategory={selectedCategory}
        handleSelectCategory={handleSelectCategory}
        categories={categories}
      />
      <Games selectedCat={selectedCategory} games={games} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
