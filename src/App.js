import React from 'react';

import Homepage from './Homepage';
import AboutUs from './AboutUs';
import ProductsAndServices from './ProductsAndServices';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsAndInsights from './NewsAndInsights';
import Sustainability from './Sustainability';
import ContactUs from './Contact Us';
//import './App.css';




function App() {
    return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/products" element={<ProductsAndServices />} />
    <Route path="/insights" element={<NewsAndInsights />} />
    <Route path="/sustainability" element={<Sustainability/>} />
    <Route path="/contact us" element={<ContactUs />} />
  </Routes>
</BrowserRouter>
    )
}
export default App;