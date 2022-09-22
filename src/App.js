import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
