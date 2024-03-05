// import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import CreateUser from '../user/CreateUser';
import Button from './Button';

const Home = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="mb-10 text-2xl font-semibold text-dark sm:mb-20 md:text-3xl lg:text-5xl">
        <h1 className="mb-2 md:mb-4 xl:mb-6">Well hello there! 👋🏼</h1>
        <span className="text-darker">Welcome to my Dummy Project.</span>
      </div>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to={'/products'} type={'primary'}>
          Continue as {username}
        </Button>
      )}
    </div>
  );
};

export default Home;
