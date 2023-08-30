import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import ProductsPage, {
  loader as productsLoader,
} from './features/ProductsMenu/ProductsPage';
import ProductPage, {
  loader as productLoader,
} from './features/Product/ProductPage';
import CreateProductPage from './features/Product/NewProduct/CreateProductPage';
import EditProductPage from './features/Product/EditProduct/EditProductPage';
import Layout from './ui/Layout';
import Error from './ui/Error';
import ProductCategoryPage from './features/SearchProducts/ProductCategoryPage';
const router = createBrowserRouter([
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
        loader: productsLoader,
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
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: '/products/:productId/edit',
        element: <EditProductPage />,
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: '/products/category/:categoryId',
        element: <ProductCategoryPage />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
