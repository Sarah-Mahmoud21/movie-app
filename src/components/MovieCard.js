import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/MovieCard.css";
import { Link } from "react-router-dom";
import Header from "../components/HeaderMovie";

function MovieCard() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8c2cd4aac7c15daf871570a653aab68a&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);

        // Fetching credits to get director and actors
        fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8c2cd4aac7c15daf871570a653aab68a`
        )
          .then((res) => res.json())
          .then((creditsJson) => {
            // Finding the director
            const directorCredit = creditsJson.crew.find(
              (crew) => crew.job === "Director"
            );
            if (directorCredit) {
              setDirector(directorCredit.name);
            }
            // Extracting actors
            const actorsList = creditsJson.cast.slice(0, 5);
            setActors(actorsList);
          });
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <img
        className="back"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="container">
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <h3>polt</h3>
            <p>{movie.overview}</p>
            <h3>IMDB RATING</h3>
            <p>{movie.vote_average}</p>
            <h3>DIRECTOR</h3>
            <p>Director: {director}</p>
          </div>
        </div>
        <div className="actors">
          {actors.map((actor) => (
            <div key={actor.id} className="actor">
               <Link to={`/actor/${actor.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
