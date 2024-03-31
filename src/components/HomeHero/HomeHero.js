import '../HomeHero/HomeHero.css';

function HomeHero({ movie }) {
  return (
    <>
      {movie && movie.poster_path && (
        <div className="home">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
          <p>
            <strong style={{ fontSize: '20px' }}>{movie.title}</strong>
            <br />
            {movie.overview}
          </p>
        </div>
      )}
    </>
  );
}

export default HomeHero;
