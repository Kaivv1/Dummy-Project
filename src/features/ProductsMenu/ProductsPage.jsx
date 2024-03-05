/* eslint-disable */
import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../services/apiDummyJson';
import Product from '../Product/Product';
import SearchProductCategory from '../SearchProducts/SearchProductCategory';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import '../../style/pagination.css';

const ProductsPage = () => {
  const products = useLoaderData();
  const itemsPerPage = 10;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const [currPage, setCurrPage] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrPage(selectedPage);
    scrollToTop();
  };

  const offset = currPage * itemsPerPage;
  const displayedProducts = products.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex flex-col items-center justify-center px-4 pb-12">
      <SearchProductCategory />
      <ul className="grid w-fit grid-cols-[1fr] gap-10 md:grid-cols-2 xl:grid-cols-3">
        {displayedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'Previous Page'}
        nextLabel={'Next Page'}
        breakLabel={'...'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
        marginPagesDisplayed={1}
        className="my-10 flex justify-center space-x-3 font-medium"
      />
    </div>
  );
};

export default ProductsPage;
