/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import useDiscountCalculator from '../../services/useDiscountCalc';

const Product = ({ product }) => {
  const { title, brand, stock, price, id, images, discountPercentage } =
    product;

  const { calcDiscountPrice } = useDiscountCalculator();

  const discountPrice = calcDiscountPrice(price, discountPercentage);

  return (
    <Link to={`/products/${id}`}>
      <li className="hover:scale-104  max-w-xs rounded-xl border-none bg-lighter p-2 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-9 ">
        <div className="mb-2 flex items-center justify-center">
          <span className="text-s rounded-b-md bg-promo px-1.5 text-light">
            PROMO -{Math.round(discountPercentage)}%
          </span>
        </div>
        <img
          src={images[0]}
          alt={title}
          className={`mx-auto mb-2 h-60 w-60 object-scale-down ${
            stock <= 0 ? 'opacity-70 grayscale' : ''
          }`}
        />

        <div className="mb-5">
          <p className="mb-2 text-center text-xl font-semibold text-stone_600">{`${title}`}</p>
          <p className="text-center font-medium text-myVioletDark">{brand}</p>
        </div>
        {discountPercentage <= 0 ? (
          <span className="mb-4 text-center text-2xl font-bold text-blue">
            {' '}
            {price}
          </span>
        ) : (
          <div className="mb-4 flex justify-center space-x-3">
            {' '}
            <span className="text-2xl font-normal text-black line-through decoration-red">
              {price} $
            </span>{' '}
            <span className="text-2xl font-bold text-blue">
              {discountPrice.toFixed(2)} $
            </span>
          </div>
        )}

        <div className="text-center">
          {stock !== 0 ? (
            <p className="upper text-md text-green">{`In Stock: ${stock} left`}</p>
          ) : (
            <p className="text-md uppercase text-red/90">Sold Out</p>
          )}
        </div>
      </li>
    </Link>
  );
};

export default Product;
