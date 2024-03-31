import React, { useEffect, useState } from "react";
import "./movie.css";
import { Link } from "react-router-dom";
import Header from "../HeaderFolder/HeaderMovie";
import HomeHero from "../HomeHero/HomeHero";

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1); // Initial page number

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8c2cd4aac7c15daf871570a653aab68a&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    )
      .then((res) => res.json())
      .then((json) => {
        // Append new movies to the existing movie list
        setMovieList([...movieList, ...json.results]);
        setPage(page + 1); // Increment page number
      });
  };

  useEffect(() => {
    getMovies();
  }, []); // Fetch movies initially only

  const handleLoadMore = () => {
    getMovies(); // Fetch more movies when the button is clicked
  };

  return (
    <>
      <Header />
      <HomeHero movie={movieList[5]} />
      <h1>Popular Movies</h1>
      <div className="posters">
        {movieList.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))}
      </div>
      <div className="center">
      <button onClick={handleLoadMore}>Load More</button>
      </div>
    </>
  );
}

export default Movie;
