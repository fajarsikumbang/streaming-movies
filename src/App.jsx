import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './component/Movie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'f2bb47c2f23b650e0b37f9e69baeea6e';
  const API_URL = 'https://api.themoviedb.org/3';

  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
      if (response.data.results.length > 0) {
        setMovies(response.data.results);
      } else {
        setError('No results found.');
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
      <header>
        <div className="header-content">
          <div className="logo">Movie Streaming</div>
          <div className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies..."
            />
            <button onClick={() => fetchMovies(searchTerm)}>Search</button>
          </div>
        </div>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      {}
      <footer className="footer">
        <p>&copy; 2024 Fajar Sikumbang. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
