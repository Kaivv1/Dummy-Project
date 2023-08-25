import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../services/apiDummyJson';
import Product from '../Product/Product';

const ProductsPage = () => {
  const products = useLoaderData();

  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

export async function loader() {
  const products = await getProducts();
  return products;
}

export default ProductsPage;
