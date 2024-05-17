import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { fetchMovieById } from "../../redux/slices/moviesSlice";
import "./movieCardShort.css";

export const MovieCardShort = (props) => {
  const { movie } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(fetchMovieById(id));
    navigate("/movie");
  };

  return (
    <li
      onClick={() => handleClick(movie.imdbID)}
      className="movie-item"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        height={"200px"}
      />
      <h4>{movie.Title}</h4>
      <span>{movie.Year}</span>
    </li>
  )
}
