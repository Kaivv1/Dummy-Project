import { useState } from 'react';
import { createProduct } from '../../../services/apiDummyJson';
import { useNavigate } from 'react-router-dom';
import LinkButton from '../../../ui/LinkButton';
const CreateProductPage = () => {
  const [images, setImages] = useState([]);
  const [thumbNailName, setThumbNailName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [create, setCreate] = useState({
    title: '',
    brand: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    discountPercentage: '',
    rating: '',
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setCreate((curr) => ({ ...curr, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;

    setImages(Array.from(files));
  };

  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    setThumbNailName(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const productData = {
      ...create,
      images: images.map((file) => file.name),
      thumbnail: thumbNailName,
    };

    await createProduct(productData);

    setImages([]);
    setCreate({
      title: '',
      brand: '',
      category: '',
      description: '',
      price: '',
      stock: '',
      discountPercentage: '',
      rating: '',
    });
    setThumbNailName('');

    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      input.value = '';
    });
    setIsSubmitting(false);
    navigate('/products');
  };
  return (
    <div>
      <div className="mt-7">
        <LinkButton to={'-1'}>&#129032; Back to menu</LinkButton>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-7 flex flex-col items-center justify-center space-y-4">
          <p className="md:text-lg xl:text-xl">Choose images:</p>
          <div>
            <input
              type="file"
              multiple
              name="images"
              onChange={handleImageChange}
            />
            {images.length !== 0 && (
              <ol>
                {images.map((file, i) => (
                  <li key={i}>
                    {file.name} - {file.type}
                  </li>
                ))}
              </ol>
            )}
          </div>
          <label htmlFor="title" className="md:text-lg xl:text-xl">
            Title:
          </label>
          <input
            required
            type="text"
            name="title"
            value={create.title}
            onChange={handleInputs}
            className="formInput"
          />
          <label htmlFor="brand" className="md:text-lg xl:text-xl">
            Brand:
          </label>
          <input
            required
            type="text"
            name="brand"
            value={create.brand}
            onChange={handleInputs}
            className="formInput"
          />
          <label htmlFor="category" className="md:text-lg xl:text-xl">
            Category:
          </label>
          <input
            required
            type="text"
            name="category"
            value={create.category}
            onChange={handleInputs}
            className="formInput"
          />
          <label htmlFor="price" className="md:text-lg xl:text-xl">
            Price:
          </label>
          <input
            required
            type="number"
            name="price"
            value={create.price}
            onChange={handleInputs}
            className="formInput remove-arrow"
          />
          <label htmlFor="description" className="md:text-lg xl:text-xl">
            Description:
          </label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={create.description}
            onChange={handleInputs}
            className="remove-arrow formInput h-32 resize-none  overflow-auto rounded-xl"
          ></textarea>
          <label htmlFor="stock" className="md:text-lg xl:text-xl">
            Stock:
          </label>
          <input
            required
            type="text"
            name="stock"
            value={create.stock}
            onChange={handleInputs}
            className="formInput remove-arrow"
          />
          <label htmlFor="discountPercentage" className="md:text-lg xl:text-xl">
            Discount percentage:
          </label>
          <input
            type="number"
            name="discountPercentage"
            value={create.discountPercentage}
            onChange={handleInputs}
            className="formInput remove-arrow"
          />
          <label htmlFor="rating" className="md:text-lg xl:text-xl">
            Rating:
          </label>
          <input
            required
            type="number"
            name="rating"
            value={create.rating}
            onChange={handleInputs}
            className="formInput remove-arrow"
          />
          <p className="md:text-lg xl:text-xl">Choose thumbnail:</p>
          <input
            required
            type="file"
            name="thumbNail"
            onChange={handleThumbnail}
          />
          <div className="p-4">
            <button
              disabled={isSubmitting}
              className='disabled:cursor-not-allowed" inline-block   rounded-md bg-green  px-2 py-2 text-sm font-semibold uppercase tracking-wide text-light shadow-md transition-colors duration-300 hover:bg-darkGreen focus:outline-none focus:ring-green lg:px-4 lg:text-base'
            >
              {isSubmitting ? 'Listing product....' : 'List product'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
