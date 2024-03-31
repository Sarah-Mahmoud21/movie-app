import React, { useEffect, useState } from "react";
import "./movie.css";
import { Link } from "react-router-dom";
import Header from "../HeaderFolder/HeaderMovie";
import HomeHero from "../HomeHero/HomeHero";


function Movie() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8c2cd4aac7c15daf871570a653aab68a&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movieList);

  return (
    <>
    <Header/>
    <HomeHero movie={movieList[5]}/>
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
    </>
  );
}

export default Movie;
