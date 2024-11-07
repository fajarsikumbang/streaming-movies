import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Movie from './component/Movie';
import './App.css';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'f2bb47c2f23b650e0b37f9e69baeea6e';

  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US`
      );
      console.log(response.data);
      if (response.data.results.length > 0) {
        setMovies(response.data.results);
      } else {
        setError('No movies found');
      }
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('batman');
  }, []);

  return (
    <div className="app-container">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onSearch={() => fetchMovies(searchTerm)} 
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
