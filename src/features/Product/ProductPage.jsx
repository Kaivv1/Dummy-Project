/*eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../services/apiDummyJson';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import CarouselDefault from '../../ui/CarouselDefault';
import Rating from '../../ui/Rating';
import useDiscountCalculator from '../../services/useDiscountCalc';
import LinkButton from '../../ui/LinkButton';
import DeleteModal from '../../ui/ConfirmDeleteModal';

const ProductPage = () => {
  const product = useLoaderData();
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();
  const {
    title,
    description,
    price,
    id,
    brand,
    category,
    images,
    rating,
    stock,
    discountPercentage,
  } = product;

  const { calcDiscountPrice } = useDiscountCalculator();

  const discountPrice = calcDiscountPrice(price, discountPercentage);

  const handleDelete = () => {
    deleteProduct(product.id);
    setIsDelete(!isDelete);

    setTimeout(() => {
      navigate('/products');
    }, 1000);
  };

  const handleCancel = () => {
    setIsDelete(false);
  };
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-12 ">
      <div className="my-7 flex w-full justify-start">
        <LinkButton to={'/products'}> &#129032; Go back</LinkButton>
      </div>

      <div className="md:px-0 lg:px-16 xl:px-36 2xl:px-80">
        <div className="rounded-xl border-none bg-light p-5 shadow-2xl sm:flex sm:p-10">
          <CarouselDefault images={images} />
          <div className="flex flex-col justify-between sm:ml-7">
            <div className="space-y-3">
              <p className="text-center text-xl font-semibold md:text-2xl lg:text-5xl xl:text-4xl">
                {title}
              </p>
              <div className="space-y-2 md:space-y-6 md:text-xl xl:text-2xl">
                <p>From: {brand}</p>
                <p>Category: {category}</p>
                <p>Description: {description}</p>
                <Rating rating={rating} />
              </div>
            </div>
            <div className="my-2 md:space-y-5 lg:flex lg:justify-between">
              {stock !== 0 ? (
                <p className="upper my-2 text-base text-green md:text-xl lg:my-0">{`In Stock: ${stock} left`}</p>
              ) : (
                <p className="text-base uppercase text-red/90 md:text-xl">
                  Sold Out
                </p>
              )}
              {discountPercentage <= 0 ? (
                <span className="my-2 text-center text-2xl font-bold text-blue">
                  {' '}
                  {price}
                </span>
              ) : (
                <div className="mb-2 flex justify-center space-x-3 text-2xl lg:text-4xl">
                  {' '}
                  <span className="  font-normal text-black line-through decoration-red">
                    {price} $
                  </span>{' '}
                  <span className=" font-bold text-blue">
                    {discountPrice.toFixed(2)} $
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <Link to={`/products/${id}/edit`}>
                <button className='disabled:cursor-not-allowed" inline-block rounded-md  bg-blue px-2 py-1 text-sm font-semibold uppercase tracking-wide text-light shadow-md transition-colors duration-300 hover:bg-promo focus:outline-none focus:ring-blue lg:px-4  lg:text-base'>
                  Edit
                </button>
              </Link>

              <button
                onClick={() => setIsDelete(true)}
                className='disabled:cursor-not-allowed" inline-block rounded-md  bg-lightRed px-2  py-1 text-sm font-semibold uppercase tracking-wide text-light shadow-md transition-colors duration-300 hover:bg-red focus:outline-none focus:ring-lightRed lg:px-4 lg:text-base'
              >
                Delete
              </button>
              {isDelete && (
                <DeleteModal onDelete={handleDelete} onCancel={handleCancel} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
