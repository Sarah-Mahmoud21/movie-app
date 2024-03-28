import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from "react-router-dom";
import Movie from './components/Movie';
import MovieCard from './components/MovieCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movie/>
  },
  {
    path: "/movie/:id",
    element: <MovieCard/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);