// SearchBar.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewsFromApi1, fetchNewsFromApi2 } from '../store/newsSlice';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchNewsFromApi1(query) as any);
      dispatch(fetchNewsFromApi2(query) as any);
    }
  };

  return (
    <div className='search_container'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
