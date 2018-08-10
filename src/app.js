import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from 'components/Nav/index';
import Photos from 'components/Photos/index';
import Footer from 'components/Footer/index';

const App = () => (
  <div className="app-root">
    <Navigation />
    <Photos />
    <Footer />
  </div>
);
export default App;
