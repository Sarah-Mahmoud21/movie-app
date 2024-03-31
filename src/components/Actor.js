import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./actor.css"; // Import CSS file for styling
import Header from "./HeaderMovie";

function Actor() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch actor details
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=8c2cd4aac7c15daf871570a653aab68a&language=en-US`)
      .then((res) => res.json())
      .then((actorData) => {
        setActor(actorData);
      });

    // Fetch movies featuring the actor
    fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=8c2cd4aac7c15daf871570a653aab68a&language=en-US`)
      .then((res) => res.json())
      .then((moviesData) => {
        setMovies(moviesData.cast .slice(0, 5));
      });
  }, [id]);

  if (!actor) return <div>Loading...</div>;

  return (
    <div>
        <Header/>
    <h1>{actor.name}</h1>
    <img className="personal"
      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
      alt={actor.name}
    />
    <p>Biography: {actor.biography}</p>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actor;