import React from 'react';
import { Footer, Navbar } from '../components';

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <div className='bg-[#fdf4e5] pb-14'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
