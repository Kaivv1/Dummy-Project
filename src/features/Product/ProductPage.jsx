import { Link, useLoaderData } from 'react-router-dom';
import { getProduct } from '../../services/apiDummyJson';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../ui/Arrows/LeftArrow';
import RightArrow from '../../ui/Arrows/RightArrow';
const ProductPage = () => {
  const product = useLoaderData();
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
  } = product;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };
  console.log(product);
  return (
    <div>
      <Slider {...settings}>
        {images &&
          images.map((image, i) => (
            <div key={i}>
              <img src={image} alt="" />
            </div>
          ))}
      </Slider>
      <div>
        <p>{title}</p>
        <p>{brand}</p>
        <p>{category}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>{rating}</p>
        <p>{stock}</p>
        <p>{price}</p>
      </div>
      <div>
        <Link to={`/products/${id}/edit`}>
          <button>Edit</button>
        </Link>

        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProductPage;

export async function loader({ params }) {
  const product = await getProduct(params.productId);
  return product;
}
