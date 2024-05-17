import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/moviesSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
