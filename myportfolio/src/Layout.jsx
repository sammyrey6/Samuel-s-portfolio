import React, { Children } from 'react'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';

const Layout = ({ children }) => {
  return (
    <>
    <Navigation />
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout