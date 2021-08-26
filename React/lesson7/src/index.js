import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './style/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Service';
import Missions from './components/Mission';
import Contact from './components/Contact';


const Nav = () => {
  return(
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active different" aria-current="page" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/missions">Missions</Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
          </li>          
        </ul>
        <form className="d-flex">
            <button className="btn btn-outline-warning" type="submit">Login</button>
          </form>
      </div>
    </div>
  </nav>
  );
}





const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/services" component={Services}></Route>
    <Route path="/missions" component={Missions}></Route>
    <Route path="/contact" component={Contact}></Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

