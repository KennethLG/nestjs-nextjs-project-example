import { Game } from "@/app/entities/game";
import Image from "next/image";
import React from "react";

type ModalProps = {
  game: Game;
  onClose: () => void;
}

const Modal = ({ game, onClose }: ModalProps) => (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div className="inline-block align-bottom bg-gray-800 rounded-lg text-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="sm:flex-shrink-0">
              <Image
                src={`https://picsum.photos/id/${game.id}00/300/300`}
                alt={game.title}
                className="rounded-md"
                width={300}
                height={300}
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium">{game.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{game.description}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={onClose}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
