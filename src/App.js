import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
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
    this.state = {};
  }

  render() {
    return (
      <React.Suspense fallback={<ClipLoader cssOverride={override} />}>
        <ProductProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="*" element={<Navigate to="/product/1" />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
            <Footer />
          </Router>
        </ProductProvider>
      </React.Suspense>
    );
  }
}
