import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/Landingpage';
import ProductListPage from './components/ProductListPage/ProductListPage';
import ProductPage from './components/ProductPage/ProductPage';
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
            <Route path='/Products' element={<ProductListPage />} />
            <Route path='/Product/:id' element={<ProductPage />} />
          </Routes>
        </div>
        {/* <CookiePrompt /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
