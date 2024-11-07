import React from 'react';

const Movie = ({ movie }) => {
  // Menyusun URL poster
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const overview = movie.overview || 'No description available.';

  return (
    <div className="movie">
      <img src={posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{overview}</p>

      {/* Cek jika film tersedia di platform streaming */}
      <div className="watch-now">
        <a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-link"
        >
          Watch on TMDb
        </a>
      </div>
    </div>
  );
};

export default Movie;
