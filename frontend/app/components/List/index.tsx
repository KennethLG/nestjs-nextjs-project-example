import React, { useState } from "react";
import Modal from "../Modal";
import { Game } from "@/app/entities/game";
import Image from "next/image";

type ListProps = {
  games: Game[];
};

const List = ({ games }: ListProps) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <li
            key={game.id}
            className="bg-gray-800 p-4 rounded-md shadow-md cursor-pointer"
            onClick={() => handleGameClick(game)}
          >
            <Image
              src={`https://picsum.photos/id/${game.id}00/50/50`}
              alt={game.title}
              className="mb-2 rounded-md"
              width={50}
              height={50}
            />
            <span className="text-white">{game.title}</span>
          </li>
        ))}
      </ul>
      {selectedGame && <Modal game={selectedGame} onClose={handleCloseModal} />}
    </>
  );
};

export default List;
