import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { NotFound } from '../components/NotFound';
import { Root } from "../components/Root";
import SearchMovies from "../pages/SearchMovies";
import GenresInDb from "../pages/GenresInDb";
import LastMovieInDb from "../pages/LastMovieInDb";
import ContentRowMovies from "../pages/ContentRowMovies";
import ContentRowTop from "../pages/ContentRowTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <ContentRowTop />
      },
      {
        path: "DH-TP9-Hooks/",
        element: <ContentRowTop />
      },
      {
        path: "/SearchMovies",
        element: <SearchMovies />
      },
      {
        path: "/GenresInDb",
        element: <GenresInDb />
      },
      {
        path: "/LastMovieInDb",
        element: <LastMovieInDb />
      },
      {
        path: "/ContentRowMovies",
        element: <ContentRowMovies />
      },
      {
        path: "*", // Coincide con cualquier ruta desconocida
        element: <NotFound/>
      }
    ]
  },
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};
