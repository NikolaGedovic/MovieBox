import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-indigo-950 h-screen flex flex-col items-center">
        <Navbar />
        <MovieCard />
      </div>
    </>
  );
}

export default App;
