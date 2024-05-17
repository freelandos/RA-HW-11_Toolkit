import { useAppSelector } from "../../hooks";
import { MovieCardShort } from "../MovieCardShort";
import "./moviesList.css";

export const MoviesList = () => {
  const { movies: { Search: moviesList, Response }, loading, error } = useAppSelector((state) => state.movies);

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && Response === "True" &&
        <ul className="movie-list">
          {moviesList.map((movie) => (
            <MovieCardShort movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      }
      {!loading && !error && Response === "False" &&
        <h4>Movies not found!</h4>
      }
    </>
  )
}
