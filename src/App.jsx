import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './ui/Home';
import ProductsPage from './features/ProductsMenu/ProductsPage';
import ProductPage from './features/Product/ProductPage';
import CreateProductPage from './features/Product/NewProduct/CreateProductPage';
import EditProductPage from './features/Product/EditProduct/EditProductPage';
import Layout from './ui/Layout';
import Error from './ui/Error';
import ProductCategoryPage from './features/SearchProducts/ProductCategoryPage';
import {
  getProduct,
  getProducts,
  getProductsByCategory,
} from './services/apiDummyJson';
const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
        loader: async () => {
          const products = await getProducts();
          return products;
        },
        errorElement: <Error />,
      },
      {
        path: '/createProduct',
        element: <CreateProductPage />,
        errorElement: <Error />,
      },
      {
        path: '/products/:productId',
        element: <ProductPage />,
        loader: async ({ params }) => {
          const product = await getProduct(params.productId);
          return product;
        },
        errorElement: <Error />,
      },
      {
        path: '/products/:productId/edit',
        element: <EditProductPage />,
        loader: async ({ params }) => {
          const product = await getProduct(params.productId);
          return product;
        },
        errorElement: <Error />,
      },
      {
        path: '/products/category/:categoryId',
        element: <ProductCategoryPage />,
        loader: async ({ params }) => {
          const productsByCategory = await getProductsByCategory(
            params.categoryId,
          );
          return productsByCategory.products;
        },
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
