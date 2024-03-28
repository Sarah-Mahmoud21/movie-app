import '../components/HomeHero.css'
function HomeHero({ movie }) {
    return (
      <>
        {movie && movie.poster_path && (
            <div className="home">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <p>{movie.title} <br/>{movie.overview} </p>
          </div>
        )}
      </>
    );
  }
  
  export default HomeHero;
  