import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/products">go to products</Link>
    </div>
  );
};

export default Home;
