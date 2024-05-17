import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchTitle: "",
  movies: [],
  currentMovie: null,
  favorite: [],
  loading: false,
  error: "",
};

export const fetchMoviesByTitle = createAsyncThunk(
  "search/fetchMoviesByTitle",
  async (searchTitle, { rejectWithValue }) => {
    try {
      const url = new URL(import.meta.env.VITE_BASE_URL);
      url.searchParams.set("apikey", import.meta.env.VITE_APIKEY);
      url.searchParams.set("s", searchTitle);
      url.searchParams.set("type", "movie");

      const response = await fetch(url);

      if (!response.ok) {
        return rejectWithValue("Loading error!");
      }

      return await response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchMovieById = createAsyncThunk(
  "search/fetchMovieById",
  async (imdbID, { rejectWithValue }) => {
    try {
      const url = new URL(import.meta.env.VITE_BASE_URL);
      url.searchParams.set("apikey", import.meta.env.VITE_APIKEY);
      url.searchParams.set("i", imdbID);

      const response = await fetch(url);

      if (!response.ok) {
        return rejectWithValue("Loading error!");
      }

      return await response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchTitle: (state, action) => {
      state.searchTitle = action.payload;
    },
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    addToFavorite: (state, action) => {
      if (!state.favorite.some((movie) => movie.imdbID === action.payload.imdbID)) {
        state.favorite.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favorite = state.favorite.filter((movie) => movie.imdbID !== action.payload.imdbID)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByTitle.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchMoviesByTitle.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchMoviesByTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.currentMovie = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setSearchTitle, setCurrentMovie, addToFavorite, removeFromFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
