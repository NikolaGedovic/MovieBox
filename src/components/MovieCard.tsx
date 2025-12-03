import { type Movie } from "../services/api";

export default function MovieCard({ movie }: { movie: Movie | null }) {
  return (
    <div className="h-9/12 rounded-2xl mt-3 w-8/9 bg-gray-700 grid grid-cols-10">
      <div className="col-span-4 flex items-center justify-center">
        <img className=" rounded-2xl" src={movie?.Poster} alt="movie_image" />
      </div>
      <div className="col-span-6 flex items-baseline justify-center flex-col gap-12 pr-40 text-xl text-indigo-50">
        <div>Title: {movie?.Title}</div>
        <div>Year: {movie?.Year}</div>
        <div>Genre: {movie?.Genre}</div>
        <div>Duration: {movie?.Runtime}</div>
        <div>{movie?.Plot}</div>
      </div>
    </div>
  );
}
