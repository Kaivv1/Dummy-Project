/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchTool from '../../ui/SearchTool';
const SearchProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const res = await fetch('https://dummyjson.com/products/categories');

    if (!res.ok) throw Error();

    const data = await res.json();
    setCategories([...data]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/category/${selectedCategory}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={(e) => setSelectedCategory(e.target.value)}
      value={selectedCategory}
      className="mb-20 mt-12 flex flex-col items-center justify-center gap-2"
    >
      <label
        htmlFor="selector"
        className="text-center text-xl font-medium text-stone_700 sm:text-2xl lg:text-3xl"
      >
        Search products by category
      </label>
      <div className="mt-2 flex items-center justify-center">
        <select
          name="selector"
          placeholder="Choose category"
          className="hover:opacity-85 rounded-full p-3 text-center shadow-md transition-all duration-100 focus:border-darker focus:outline-none focus:ring-2 focus:ring-darker focus:ring-offset-0 lg:w-80"
        >
          <option disabled selected>
            Choose Category
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">
          <SearchTool />
        </button>
      </div>
    </form>
  );
};

export default SearchProductCategory;
