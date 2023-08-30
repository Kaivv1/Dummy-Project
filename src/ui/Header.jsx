import { Link } from 'react-router-dom';
import Username from '../user/Username';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 border-blue bg-darker px-4 py-5 uppercase tracking-wide sm:px-6">
      <div className="text-lg font-semibold text-light md:text-xl xl:text-2xl">
        Dummy Project
      </div>

      <div className="space-x-2 text-sm font-medium text-light md:space-x-3 md:text-base xl:text-lg">
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
