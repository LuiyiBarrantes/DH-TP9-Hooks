import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* import { Home } from '../pages/Home';
import { Products } from '../pages/Products'; */
/* import { Users } from '../pages/Users'; */
/* import { Chefs } from '../pages/Chefs'; */
import { NotFound } from '../components/NotFound'; // Importa el componente NotFound
import { Root } from "../components/Root";
/* import ContentWrapper from "../components/ContentWrapper"; */
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
