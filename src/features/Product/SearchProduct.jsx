/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchProduct = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    onSearch(query);
    navigate(`/products?search=${query}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name.."
        value={query}
        onChange={onQueryChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchProduct;
