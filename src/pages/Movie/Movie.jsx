import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentMovie } from "../../redux/slices/moviesSlice";
import { MovieCardFull } from "../../components/MovieCardFull";
import "./movie.css";

export const Movie = () => {
  const { currentMovie, loading, error } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoBack = () => {
    dispatch(setCurrentMovie(null));
    navigate(-1);
  };

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && currentMovie &&
        <>
          <button
            className="goback-button"
            onClick={handleGoBack}
          >
            Go back
          </button>
          <MovieCardFull movie={currentMovie} />
        </>
      }
    </>
  )
}
