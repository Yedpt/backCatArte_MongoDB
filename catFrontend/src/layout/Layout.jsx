// En Layout.jsx

import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer';
import { FilterProvider } from '../layout/FilterContext';

const Layout = () => {
  return (
    <FilterProvider>
      <Nav />
      <Outlet />
      <Footer />
    </FilterProvider>
  );
};

export default Layout;
