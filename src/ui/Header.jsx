import { Link } from 'react-router-dom';
import Username from '../user/Username';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <header className="flex items-center justify-between border-b-2 border-blue bg-darker px-4 py-5 uppercase tracking-wide sm:px-6">
      <div className="text-lg font-semibold text-light md:text-xl xl:text-2xl">
        Dummy Project
      </div>

      <button
        className="text-2xl text-light md:hidden"
        onClick={toggleDropDown}
      >
        {isDropDown ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      {isDropDown && (
        <div className="absolute right-0 top-16 z-20 mt-2 flex flex-col space-y-2 rounded-md border  border-blue bg-darker p-2 text-base font-medium text-lighter shadow-md md:hidden">
          <Link
            to="/"
            className="block hover:underline hover:underline-offset-2"
          >
            {' '}
            Home
          </Link>
          <Link
            to="/products"
            className="block hover:underline hover:underline-offset-2"
          >
            Menu
          </Link>
          <Link
            to={'/createProduct'}
            className="block hover:underline hover:underline-offset-2"
          >
            Create listing
          </Link>
        </div>
      )}

      <div className="hidden space-x-2 text-xs font-medium text-light sm:text-sm md:block md:space-x-3 md:text-base xl:text-lg">
        <Link to="/" className="hover:underline hover:underline-offset-2">
          {' '}
          Home
        </Link>
        <Link
          to="/products"
          className="hover:underline hover:underline-offset-2"
        >
          Menu
        </Link>
        <Link
          to={'/createProduct'}
          className="hover:underline hover:underline-offset-2"
        >
          Create listing
        </Link>
      </div>

      <Username />
    </header>
  );
};

export default Header;
