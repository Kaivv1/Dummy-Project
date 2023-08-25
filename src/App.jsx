import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import ProductsPage, {
  loader as productsLoader,
} from "./features/ProductsMenu/ProductsPage";
import ProductPage, {
  loader as productLoader,
} from "./features/Product/ProductPage";
import CreateProductPage from "./features/Product/NewProduct/CreateProductPage";
import EditProductPage from "./features/Product/EditProduct/EditProductPage";
import Layout from "./ui/Layout";
import Error from "./ui/Error";
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: "/products/:productId",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "products/:productId/edit",
        element: <EditProductPage />,
      },
      {
        path: "/products/newProduct",
        element: <CreateProductPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
