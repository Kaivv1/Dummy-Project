import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <main className="mx-auto h-full w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
