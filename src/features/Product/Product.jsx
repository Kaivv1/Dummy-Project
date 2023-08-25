/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { thumbnail, title, brand, stock, price, id } = product;

  return (
    <Link to={`/products/${id}`}>
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <p>{title}</p>
          <p>{brand}</p>
        </div>
        <div>
          <p>{stock}</p>
          <span>{price}</span>
        </div>
      </li>
    </Link>
  );
};

export default Product;
