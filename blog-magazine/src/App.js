import React from 'react';
import './sass/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Common from './components/About';
import Information from './components/Information';
import { BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';


const App = () => {
  return (
    <div className="app">
     <BrowserRouter>
     <Header/>
     <CartProvider>
      <Route path="/" exact component={Common}/>
      <Route path="/information" component={Information}/>
       </CartProvider>
      <Footer/>
     </BrowserRouter>

    </div>
  )
}

export default App

