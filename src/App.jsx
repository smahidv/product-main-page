import React from 'react';
import Header from './component/header/Header';
import SlideShow from './component/slideshow/SlideShow';
import Description from './component/description/Description';
import Footer from './component/footer/Footer';
import './App.css';
import { CartProvider } from './component/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <div className="grid-2">
          <SlideShow />
          <Description />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
