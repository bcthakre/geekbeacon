import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Bhupendrasinh Thakre</title>
      </Head>

      <header className="py-10">
        <h1 className="text-4xl font-bold">Musings</h1>
      </header>

      <main>{children}</main>

      <footer className="py-10">
        <p>&copy; Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
