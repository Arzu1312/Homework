import React from 'react';
import '../styles/style.css';
import Navbar from './Navbar';
import Aside from './Aside';
import axios from 'axios';



class App extends React.Component {

 
  
  render () {
    return (
     <div className="app">
       <Navbar url="https://github.com" ></Navbar>
       <Aside ></Aside>
       
     </div>
      )
  }
}

export default App;



