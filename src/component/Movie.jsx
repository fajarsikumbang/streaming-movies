import React from 'react';

const Movie = ({ movie }) => {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/path/to/default-image.jpg';
  const overview = movie.overview || 'No description available.';
  const title = movie.title || 'Untitled Movie';

  return (
    <div className="movie">
      <img src={posterUrl} alt={title} />
      <h2>{title}</h2>
      <p>{overview}</p>

      {}
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
