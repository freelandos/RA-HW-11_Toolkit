import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Search } from "./pages/Search";
import { Movie } from "./pages/Movie";
import { Favorite } from "./pages/Favorite";
import { NotFound } from "./pages/NotFound";
import "./App.css";

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Search />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={routes} />
  )
}
