import { useParams } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
/* eslint-disable */
const ProductCategoryPage = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(params.categoryId);
  }, []);

  async function getProducts(category) {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );

    const data = await res.json();

    const { products } = data;
    setProducts([...products]);
  }

  console.log(products);
  return (
    <div>
      <div className="mt-7">
        <LinkButton to={'/products'}> &#129032; Go back</LinkButton>
      </div>
      <ul className="my-10 grid grid-cols-1  gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryPage;
