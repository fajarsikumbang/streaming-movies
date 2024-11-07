import React, { useState } from 'react';
import axios from 'axios';

const API_IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = 'f2bb47c2f23b650e0b37f9e69baeea6e';
const Movie = ({ movie }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

 
  const posterUrl = movie.poster_path ? `${API_IMG_BASE_URL}${movie.poster_path}` : 'path_to_default_image.jpg';

 
  const fetchTrailer = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      const trailer = response.data.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      }
    } catch (error) {
      console.error('Error fetching trailer', error);
    }
  };

  return (
    <div className="movie">
      <img src={posterUrl} alt={movie.title} /> {}
      <h2>{movie.title}</h2> {}
      <button onClick={fetchTrailer} className="watch-now">Watch Trailer</button>

      {trailerUrl && (
        <div className="trailer-container">
          <iframe
            width="100%"
            height="315"
            src={trailerUrl}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Movie;
