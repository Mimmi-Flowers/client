import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/Landingpage';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Product from './components/Product/Product';
import CookiePrompt from './components/CookiePrompt/CookiePrompt';
import './App.css';
import './fonts/fonts.css';

const App = () => {
  return (
    <div className="App">
      <div className='App__wrapper'>
        <Header />
        <div className='Page-content'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Products' element={<ProductGrid />} />
            <Route path='/Product/:id' element={<Product />} />
          </Routes>
        </div>
        <CookiePrompt />
        <Footer />
      </div>
    </div>
  );
}

export default App;
