import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import { useSelector } from 'react-redux';

const Error = () => {
  const error = useRouteError();
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h1 className="text-2xl">
        {username
          ? `${username} something went wrong 😥`
          : 'Something went wrong 😥'}
      </h1>

      <p className="text-3xl">{error.data || error.message}</p>

      <LinkButton to="/">&#129032; Go back</LinkButton>
    </div>
  );
};

export default Error;
