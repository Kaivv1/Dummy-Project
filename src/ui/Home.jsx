// import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import CreateUser from '../user/CreateUser';
import Button from './Button';

const Home = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16 ">
      <div className="mb-10 text-xl  font-semibold text-dark md:text-3xl lg:text-5xl">
        <h1 className="mb-1 md:mb-2 xl:mb-4">Well hello there! 👋🏼</h1>
        <span className="  text-darker">Welcome to my Dummy Project.</span>
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
