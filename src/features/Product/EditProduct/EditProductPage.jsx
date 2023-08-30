import { editProduct } from '../../../services/apiDummyJson';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import LinkButton from '../../../ui/LinkButton';
import '../../../style/webkit.css';

const EditProductPage = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const [brand, setBrand] = useState(product.brand);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);
  const [discountPercentage, setDiscountPercentage] = useState(
    product.discountPercentage,
  );
  const [price, setPrice] = useState(product.price);
  const [rating, setRating] = useState(product.rating);
  const [stock, setStock] = useState(product.stock);
  const [title, setTitle] = useState(product.title);
  const [images] = useState(product.images);
  const [thumbnail] = useState(product.thumbnail);
  const [id] = useState(product.id);

  const [isChange, setIsChange] = useState(false);

  const onChange = () => {
    setIsChange(true);
  };

  const onCancel = () => {
    setIsChange(!isChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedProduct = {
      brand: brand,
      category: category,
      description: description,
      discountPercentage: discountPercentage,
      price: price,
      rating: rating,
      stock: stock,
      title: title,
      images: images,
      thumbnail: thumbnail,
    };

    editProduct(id, editedProduct);
    setIsChange(!isChange);

    setTimeout(() => {
      navigate(`/products/${id}`);
    }, 2000);
  };

  return (
    <div>
      <div className="mt-7">
        <LinkButton to={`/products/${id}`}>
          &#129032; Back to product
        </LinkButton>
      </div>
      <form
        onSubmit={handleSubmit}
        onChange={onChange}
        className="my-12 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <label htmlFor="title" className="md:text-lg xl:text-xl">
            Title:
          </label>
          <input
            required
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="formInput"
          />

          <label htmlFor="brand" className="md:text-lg xl:text-xl">
            Brand:
          </label>
          <input
            required
            type="text"
            name="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="formInput"
          />

          <label htmlFor="category" className="md:text-lg xl:text-xl">
            Category:
          </label>
          <input
            required
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="formInput"
          />

          <label htmlFor="description" className="md:text-lg xl:text-xl">
            Description:
          </label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="remove-arrow formInput h-32 resize-none  overflow-auto rounded-xl"
          ></textarea>

          <label htmlFor="rating" className="md:text-lg xl:text-xl">
            Rating
          </label>
          <input
            required
            type="text"
            name="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="formInput remove-arrow"
          />

          <label htmlFor="discountPercentage" className="md:text-lg xl:text-xl">
            Discount percentage:
          </label>
          <input
            required
            type="number"
            name="discountPercentage"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            className="formInput remove-arrow"
          />

          <label htmlFor="stock" className="md:text-lg xl:text-xl">
            Stock:
          </label>
          <input
            required
            type="number"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="formInput remove-arrow"
          />

          <label htmlFor="price" className="md:text-lg xl:text-xl">
            Price:
          </label>
          <input
            required
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="formInput remove-arrow"
          />
        </div>
        <div>
          {isChange && (
            <div className="my-6 space-x-4">
              <button
                type="submit"
                className='disabled:cursor-not-allowed" hover:bg-darkGreen inline-block  rounded-md bg-green  px-2 py-1 text-sm font-semibold uppercase tracking-wide text-light shadow-md transition-colors duration-300 focus:outline-none focus:ring-green lg:px-4 lg:text-base'
              >
                Save
              </button>
              <button
                onClick={onCancel}
                className='disabled:cursor-not-allowed" bg-lightRed focus:ring-lightRed  inline-block rounded-md  px-2 py-1 text-sm font-semibold uppercase tracking-wide text-light shadow-md transition-colors duration-300 hover:bg-red focus:outline-none lg:px-4 lg:text-base'
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
