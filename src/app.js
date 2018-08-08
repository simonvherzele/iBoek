import React from 'react';
import Navigation from './components/Nav/index';
import Photos from './components/Photos/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="app-root">
    <Navigation />
    <Photos />
  </div>
);
export default App;
