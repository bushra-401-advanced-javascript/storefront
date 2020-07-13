import React from 'react';

// import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';


export default props => {
  return (
      <>
          <Header />
          <Categories />
          <Products />
          <Footer />
      </>
  )
};

