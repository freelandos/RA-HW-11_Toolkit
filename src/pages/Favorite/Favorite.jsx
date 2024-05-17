import { useAppSelector } from "../../hooks";
import { MovieCardFull } from "../../components/MovieCardFull";
import "./favorite.css";

export const Favorite = () => {
  const { favorite } = useAppSelector((state) => state.movies);

  return (
    <>
      <h2>Favorite movies</h2>
      {favorite.length ? (
        <ul className="favorite-list">
          {favorite.map((movie) => (
            <MovieCardFull movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      ) : (
        <h4>No added movies!</h4>
      )}
    </>
  )
}
