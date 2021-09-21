import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import './sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return(
    
    <div className="app">
       <CartProvider>
        <Home/>
      <Cart/>
     </CartProvider>
    </div>
    
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


