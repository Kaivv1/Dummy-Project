import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
