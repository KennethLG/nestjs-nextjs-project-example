type Game = {
  id: number;
  title: string;
};

type ListProps = {
  games: Game[];
};

const List= ({ games }: ListProps) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {games.map((game) => (
      <li key={game.id} className="bg-gray-800 p-4 rounded-md shadow-md">
        <span className="text-white">{game.title}</span>
      </li>
    ))}
  </ul>
);

export default List;