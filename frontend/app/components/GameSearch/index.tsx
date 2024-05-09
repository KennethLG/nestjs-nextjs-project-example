"use client";

import { useEffect, useState } from "react";
import List from "../List";
import { Game } from "@/app/entities/game";
// import { GAMES } from "@/app/mock/games";


type GameSearchProps = {
  games: Game[]
}

const GameSearch = ({ games }: GameSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  useEffect(() => {
    setFilteredGames(games.filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [games, searchTerm]);

  return (
    <>
      <input
        type="text"
        className="w-full my-5 px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-blue-500"
        placeholder="Search by game title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List games={filteredGames} />
    </>
  );
};

export default GameSearch;
