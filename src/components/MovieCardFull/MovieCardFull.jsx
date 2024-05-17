import { useAppDispatch, useAppSelector } from "../../hooks";
import { addToFavorite, removeFromFavorite } from "../../redux/slices/moviesSlice";
import "./movieCardFull.css";

export const MovieCardFull = (props) => {
  const { movie } = props;
  const { favorite } = useAppSelector((state) => state.movies);
  const isFavorite = favorite.some((o) => o.imdbID === movie.imdbID);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    isFavorite
      ? dispatch(removeFromFavorite(movie))
      : dispatch(addToFavorite(movie))
  };

  return (
    <li className="movie">
      <img
        src={movie.Poster}
        alt={movie.Title}
        height={"300px"}
        className="movie-image"
      />
      <div>
        <h3>{movie.Title}</h3>
        <div><strong>Year:</strong> {movie.Year}</div>
        <div><strong>Genre:</strong> {movie.Genre}</div>
        <div><strong>Runtime:</strong> {movie.Runtime}</div>
        <div><strong>Director:</strong> {movie.Director}</div>
        <div><strong>Actors:</strong> {movie.Actors}</div>
        <div><strong>imdbRating:</strong> {movie.imdbRating}</div>
        <button
          className={`movie-button ${isFavorite ? "remove" : "add"}`}
          onClick={handleFavorite}
        >
          {isFavorite ? "Remove from favorite" : "Add to favorite"}
        </button>
      </div>
    </li>
  )
}
