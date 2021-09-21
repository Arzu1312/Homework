import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './style/style.css';
import Home from './components/Home';
import About from './components/About';
import Platforms from './components/Platforms';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';


const Nav = () => {
  return(
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Space</a>
         
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about" >About</Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/platforms" >Platforms</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/services" >Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/team" >Team</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact" >Contact</Link>
              </li>
            </ul>
            <div className="account">
                <h3>Create Account</h3>
            </div>
          </div>
        </div>
      </nav>
  );
}


const Footer = () => {
  return(
    <>
    <div className="footer">
       <div className="container">
            <div className="group">
                <div className="info">
                <a className="brand" href="#">Space</a>
                    <p>The most trusted Courier company in your area.</p>
                    </div>
              
                <div className="other-links">
                    <h3>Other links</h3>
                    <ul>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Movers website</a></li>
                        <li><a href="#">Traffic Update</a></li>
                    </ul>
                </div>

                <div className="service-footer">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Corporate goods</a></li>
                        <li><a href="#">Artworks</a></li>
                        <li><a href="#">Documents</a></li>
                    </ul>
                </div>

                <div className="customer">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Get Update</a></li>
                    </ul>
                </div>
            </div>
                
        </div>
    </div>

    <div className="copyright">
                   <div className="container">
                 <div className="company">
                 <p> All rights Reserved © Your Company, {new Date().getFullYear()}</p>
                    <p className="made">Made with heart by <span>ThemeWagon</span></p>
                 </div>
                   </div>

                </div>
    </>
  );
}




const App = () => {
  return (
   
    <BrowserRouter>
    <Nav/>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/platforms" component={Platforms}></Route>
    <Route path="/services" component={Services}></Route>
    <Route path="/team" component={Team}></Route>
    <Route path="/contact" component={Contact}></Route>
     <Footer/>
    </BrowserRouter>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));


