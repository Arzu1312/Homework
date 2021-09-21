import React from 'react';
import { CartProvider } from 'react-use-cart';
import './sass/style.css';
import Header from './components/Header';
import Common from './components/Explore';
// import Main from './components/Main';
// import Category from './components/Category';
// import Sell from './components/Sell';
// import Explore from './components/Explore';
// import Trending from './components/Trending';
import Footer from './components/Footer';
import Card from './components/Card';
import { BrowserRouter, Route } from 'react-router-dom';




const App = () => {
  return (
    <div className="app">
       
    <BrowserRouter>
    <CartProvider>
     <Header/>  
     <Route path="/" exact component={Common}></Route>
     <Route path="/cart" component={Card}></Route>
     <Footer/>
     </CartProvider>
    </BrowserRouter>
      


    </div>
  )
}

export default App

