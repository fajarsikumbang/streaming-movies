import React from 'react';

const Movie = ({ movie }) => (
  <div className="movie">
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Title}</h2>
  </div>
);

export default Movie;
