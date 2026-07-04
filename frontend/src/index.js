import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing-page/home/HomePage';
import AboutPage from './landing-page/about/AboutPage';
import PricingPage from './landing-page/pricing/PricingPage';
import ProductPage from './landing-page/product/ProductPage';
import Signup from './landing-page/signup/Signup';
import SupportPage from './landing-page/support/SupportPage';
import Footer from './landing-page/Footer';
import Navbar from './landing-page/Navbar';
import NotFound from './landing-page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='signup' element={<Signup/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='/product' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
