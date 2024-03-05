import { useLoaderData } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Product from '../Product/Product';

const ProductCategoryPage = () => {
  const products = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center px-4 pb-12">
      <div className="my-7 flex w-full justify-start">
        <LinkButton to={'/products'}> &#129032; Go back</LinkButton>
      </div>
      <ul className="grid w-fit grid-cols-[1fr] gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryPage;
