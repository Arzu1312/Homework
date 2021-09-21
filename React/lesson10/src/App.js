import React from 'react';
import './sass/style.css';
import Main from './components/Main';
import Live from './components/Live';
import Topseller from './components/Topseller';
import Collection from './components/Collection';
import Asset from './components/Asset';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Main/>
      <Live/>
      <Topseller/>
      <Collection/>
      <Asset/>
      <Work/>
      <Footer/>


    </div>
  )
}

export default App

