/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type }) => {
  const base =
    'disabled:cursor-not-allowed" hover:bg-promo inline-block  rounded-full bg-blue  font-semibold uppercase tracking-wide text-light shadow-md transition-colors duration-300 focus:outline-none focus:ring-blue';

  const styles = {
    primary: base + ' text-sm px-4 py-3 md:px-6 md:text-lg',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} type="submit" className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
