import React, { Component } from 'react';
import {
  Outlet, Routes, Route, Navigate,
} from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ProductProvider } from './services/context';

const Product = React.lazy(() => import('./pages/Product'));

const override = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  margin: 'auto auto',
  height: '100px',
  width: '100px',
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = [...Array(5).keys()];
  }

  render() {
    const { state } = this;
    return (
      <React.Suspense fallback={<ClipLoader cssOverride={override} />}>
        <ProductProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/product/1" />} />
            <Route path="/" element={<Outlet />}>
              {
                state.map((i) => (
                  <Route key={i} path={`product/${i + 1}`} element={<Product />} />
                ))
              }
            </Route>
          </Routes>
          <Footer />
        </ProductProvider>
      </React.Suspense>
    );
  }
}
