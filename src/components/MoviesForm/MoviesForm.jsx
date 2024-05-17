import { useAppSelector, useAppDispatch } from "../../hooks";
import { setSearchTitle, fetchMoviesByTitle } from "../../redux/slices/moviesSlice";
import "./moviesForm.css";

export const MoviesForm = () => {
  const { searchTitle }  = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    const { value } = e.target;

    if (!value) {
      dispatch(setSearchTitle(""));
      return;
    }

    dispatch(setSearchTitle(value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTitle.trim()) {
      dispatch(setSearchTitle(""));
      return;
    }

    dispatch(fetchMoviesByTitle(searchTitle.trim()));
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="search"
        placeholder="Movie title..."
        value={searchTitle}
        onChange={handleChange}
        className="form-input"
      />
      <button
        type="submit"
        className="form-button"
      >
        Search
      </button>
    </form>
  )
}
