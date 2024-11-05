import React from 'react';

const Search = ({ searchTerm, setSearchTerm, onSearch }) => (
  <div>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for movies..."
    />
    <button onClick={onSearch}>Search</button>
  </div>
);

export default Search;
