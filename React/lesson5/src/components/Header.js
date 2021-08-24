import React from 'react';
import '../style/style.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Space</a>
         
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active">Platform</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </li>
        
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Log in</a>
              </li>
            </ul>
            <div className="account">
                <h3>Create Account</h3>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header
