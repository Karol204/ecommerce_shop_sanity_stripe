import React from 'react';
import Head from 'next/head';

import Navbar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Best store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footter>
        <Footer />
      </footter>
    </div>
  );
};

export default Layout;
