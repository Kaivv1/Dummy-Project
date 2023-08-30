import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  // const footerRef = useRef(null);

  // const scrollToFooter = () => {
  //   footerRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className=" grid  min-h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow mb-6 overflow-auto">
        <main className=" mx-auto max-w-6xl p-1 md:max-w-7xl">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
