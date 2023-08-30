import { useSelector } from 'react-redux';

const Username = () => {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-base font-semibold text-lighter  lg:block">
      Greetings, {username} !
    </div>
  );
};

export default Username;
