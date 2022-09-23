import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Footer from './components/Footer';
import { ProductProvider } from './services/context';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}
