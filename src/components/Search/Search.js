import React from 'react';

import './Search.css';

export default function Search(props) {
  const { handleOnChange, handleOnClick } = props;
  return (
    <div className="search__container">
      <input
        aria-label="search-id"
        className="search__input"
        type="search"
        placeholder="Search Anime..."
        onChange={handleOnChange}
      />

      <button className="search__button" onClick={handleOnClick}>
        Search
      </button>
    </div>
  );
}
