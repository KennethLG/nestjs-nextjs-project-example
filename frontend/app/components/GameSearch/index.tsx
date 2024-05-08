"use client";

import { useState } from "react";
import List from "../List";

const games = [
  { id: 1, title: "The Legend of Zelda: Breath of the Wild" },
  { id: 2, title: "Super Mario Odyssey" },
  { id: 3, title: "God of War" },
  { id: 4, title: "Red Dead Redemption 2" },
  { id: 5, title: "Castlevania: Symphony of the Night" },
];

const GameSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className="w-full my-5 px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-blue-500"
        placeholder="Search by game title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List games={filteredGames} />
    </>
  );
};

export default GameSearch;
