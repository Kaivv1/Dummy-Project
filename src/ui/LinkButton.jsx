/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className =
    'text-blue hover:text-darker text-base font-medium hover:underline transition-all duration-300 ';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
