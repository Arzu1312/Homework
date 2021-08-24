import React from 'react';
import '../style/style.css'


function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{"color":"#FE6D0B"}}>Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link ">About</a>
               
              </li>
              <li className="nav-item">
                <a className="nav-link " >Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " >Mission</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " >Contact Us</a>
              </li>
            </ul>
            <form className="d-flex">
            
              <button className="btn btn-outline-warning" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    
    )
}

export default Header;
