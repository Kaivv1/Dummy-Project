import { useState } from 'react';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './user';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));

    navigate('/products');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <p className="mb-4 text-sm font-medium text-dark/80 md:text-base lg:font-semibold xl:text-lg">
        Let&apos;s start by telling me your name:
      </p>

      <input
        type="text"
        placeholder="Your first name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="homeInput mb-8 w-52 shadow-sm focus:w-64 sm:w-72 sm:focus:w-80"
      />
      {username !== '' && (
        <div>
          <Button type="primary">Continue</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
