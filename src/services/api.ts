export interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Plot: string;
  Poster: string;
}

export default async function MovieApiFetch(
  movieTitle: string
): Promise<Movie> {
  const apiKey: string = "d64ee086";
  const movieUrl: string = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;
  const res: Response = await fetch(movieUrl);
  const data: Movie = await res.json();
  return data;
}
