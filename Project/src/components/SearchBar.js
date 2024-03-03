// SearchComponent.js
import React from 'react';

const SearchComponent = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchComponent;
