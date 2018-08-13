import React from 'react';
import Navigation from 'components/Nav';
import Photos from 'components/Photos';
import Footer from 'components/Footer';

const Layout = () => (
  <div className="main">
    <Navigation />
    <Photos />
    <Footer />
  </div>
);

export default Layout;
