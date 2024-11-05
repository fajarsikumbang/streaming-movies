import React from 'react';
import Search from './Search';

const Header = ({ searchTerm, setSearchTerm, onSearch }) => (
  <header>
    <div className="header-content">
      <div className="logo">GenProHB</div>
      <div className="search-bar">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={onSearch} />
      </div>
    </div>
    <div className="subtitle">
      <h1>Show your favorite movies</h1>
    </div>
  </header>
);

export default Header;
