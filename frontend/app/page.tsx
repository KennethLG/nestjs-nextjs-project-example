import GameSearch from "./components/GameSearch";

const GET_DATA = "http://localhost:3000/games"; // No env variables config needed since it's a simple application

export default async function Home() {
  const response = await fetch(GET_DATA, { cache: 'force-cache' });
  const games = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white my-5">
            Welcome to the Ultimate Video Game List
          </h1>
          <p className="text-lg text-gray-400">
            Explore our collection of the most iconic video games that have
            shaped the gaming industry. From epic adventures to heart-pounding
            action, these games offer an unforgettable experience for gamers of
            all ages.
          </p>
        </div>
        <GameSearch games={games}/>
      </div>
    </main>
  );
}
