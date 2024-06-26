import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from "react-router-dom";
import Movie from './components/Movies/Movie';
import MovieCard from './components/MovieCard/MovieCard';
import Actor from './components/Actor/Actor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movie/>
  },
  {
    path: "/movie/:id",
    element: <MovieCard/>
  },
  {
    path: "/actor/:id",
    element: <Actor/>  
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);