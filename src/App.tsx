import { useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import MovieApiFetch, { type Movie } from "./services/api";

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);

  const handleSearch = async (searchTerm: string) => {
    const data = await MovieApiFetch(searchTerm);
    setMovie(data);
  };
  return (
    <>
      <div className="bg-indigo-950 h-screen flex flex-col items-center">
        <Navbar handleSearch={handleSearch} />
        <MovieCard movie={movie} />
      </div>
    </>
  );
}

export default App;
