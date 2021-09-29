import React from 'react';
import '../sass/style.css';
import img1 from '../images/photo5.jfif';
import img2 from '../images/photo1.jfif';
import img3 from '../images/photo3.jfif';
import img4 from '../images/photo2.jfif';
import img5 from '../images/photo4.jfif';
import img6 from '../images/photo7.jfif';
import img7 from '../images/photo8.jfif';
import img8 from '../images/photo9.jfif';



const Header = () => {
    return (
        <div className="header">
            <header>
                <div className="header-container">
                <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <svg width="59" height="41" viewBox="0 0 59 41" fill="currentColor" style={{color: "rgba(2,132,199)"}} xmlns="http://www.w3.org/2000/svg">
              <path d="M33.5224 9.69455C34.547 8.66632 35.1818 7.24829 35.1818 5.68181C35.1818 2.54402 32.6378 0 29.5 0C27.516 0 25.7721 1.01857 24.7559 2.55971C24.4868 2.83004 1.8706 30.7044 1.65941 31.0255C0.633591 32.0525 0 33.4705 0 35.037C0 38.1748 2.54281 40.7188 5.6806 40.7188C7.66464 40.7188 9.40853 39.7002 10.4247 38.1591C10.695 37.8888 33.3112 10.0144 33.5224 9.69455Z" fill="currentColor"></path>
              <path d="M46.6081 22.9203C47.6363 21.8921 48.2723 20.4728 48.2723 18.904C48.2723 15.7662 45.7283 13.2221 42.5905 13.2221C40.6065 13.2221 38.8614 14.2419 37.8452 15.7831C37.5737 16.0558 25.6948 30.6972 25.4824 31.0206C24.4541 32.0489 23.8193 33.4681 23.8193 35.037C23.8193 38.1748 26.3621 40.7188 29.4999 40.7188C31.484 40.7188 33.2291 39.699 34.2452 38.1579C34.5168 37.8851 46.3957 23.2437 46.6081 22.9203Z" fill="currentColor"></path>
              <path d="M59.0001 5.68181C59.0001 8.81959 56.4573 11.3636 53.3195 11.3636C50.1817 11.3636 47.6377 8.81959 47.6377 5.68181C47.6377 2.54402 50.1817 0 53.3195 0C56.4573 0 59.0001 2.54402 59.0001 5.68181Z" fill="currentColor"></path>
              <path d="M11.3624 5.68181C11.3624 8.81959 8.81838 11.3636 5.6806 11.3636C2.54281 11.3636 0 8.81959 0 5.68181C0 2.54402 2.54281 0 5.6806 0C8.81838 0 11.3624 2.54402 11.3624 5.68181Z" fill="currentColor"></path></svg>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Home <i class="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Default Demo</a></li>
                  <li><a className="dropdown-item" href="#">Home Demo 2</a></li>
                  <li><a className="dropdown-item" href="#">Home Demo 3</a></li>
                  <li><a className="dropdown-item" href="#">Home Demo 4</a></li>

                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Five cols <i class="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="inner">
                <li className="inner-list">
                     <img src={img1} className="img" />            
                <ul className="inner-item">
                <a className="item" href="#">Company</a>
                   <li><a href="#">Katz</a></li>
                   <li><a href="#">Livefish</a></li>
                   <li><a href="#">Digitube</a></li>
                   <li><a href="#">Midel</a></li>
                   <li><a href="#">Rhyloo</a></li>
                   <li><a href="#">Innojam</a></li>
                </ul>
                </li>

                  <li className="inner-list">
                  <img src={img2} className="img" />
                  <ul className="inner-item">
                  <a className="item" href="#">App Name</a>
                   <li><a href="#">Tresom</a></li>
                   <li><a href="#">Hatity</a></li>
                   <li><a href="#">Otcom</a></li>
                   <li><a href="#">Daltfresh</a></li>
                   <li><a href="#">Duobam</a></li>
                   <li><a href="#">Mat Lam Tam</a></li>
                </ul>
                  </li>  

                  <li className="inner-list">
                  <img src={img3} className="img" />
                  <ul className="inner-item">
                  <a className="item" href="#">City</a>
                   <li><a href="#">Nezamyslice</a></li>
                   <li><a href="#">Herzliyya</a></li>
                   <li><a href="#">Hongqi</a></li>
                   <li><a href="#">Kamakura</a></li>
                   <li><a href="#">Yahil’nytsya</a></li>
                   <li><a href="#">Mandalay</a></li>
                </ul>
                  </li>

                  <li className="inner-list">
                  <img src={img4} className="img" />
                  <ul className="inner-item">
                  <a className="item" href="#">Contruction</a>
                   <li><a href="#">Plexiglass</a></li>
                   <li><a href="#">Plexiglass</a></li>
                   <li><a href="#">Stone</a></li>
                   <li><a href="#">Granite</a></li>
                   <li><a href="#">Glass</a></li>
                   <li><a href="#">Plexiglass</a></li>
                </ul>
                  </li>

                  <li className="inner-list">
                  <img src={img5} className="img" />
                  <ul className="inner-item">
                  <a className="item" href="#">Country</a>
                   <li><a href="#">Czech Republic</a></li>
                   <li><a href="#">Israel</a></li>
                   <li><a href="#">China</a></li>
                   <li><a href="#">Japan</a></li>
                   <li><a href="#">Ukraine</a></li>
                   <li><a href="#">Myanmar</a></li>
                </ul>
                  </li>

                </div>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fewer cols <i class="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <div className="inner">
                 <li className="inner-list">
                 <img src={img6} className="img" />
                 <ul className="inner-item">
                  <a className="item" href="#">Corporate</a>
                   <li><a href="#">Training</a></li>
                   <li><a href="#">Services</a></li>
                   <li><a href="#">Sales</a></li>
                   <li><a href="#">Marketing</a></li>
                   <li><a href="#">Sales</a></li>
                   <li><a href="#">Management</a></li>
                </ul>
                   </li>

                  <li className="inner-list">
                  <img src={img7} className="img" />
                 <ul className="inner-item">
                  <a className="item" href="#">Car Model</a>
                   <li><a href="#">Town & Country</a></li>
                   <li><a href="#">RAV4</a></li>
                   <li><a href="#">Lancer Evolution</a></li>
                   <li><a href="#">Quest</a></li>
                   <li><a href="#">Cougar</a></li>
                   <li><a href="#">Galant</a></li>
                </ul>
                   </li>
                
                   <li className="inner-list">
                   <img src={img8} className="img" />
                 <ul className="inner-item">
                  <a className="item" href="#">Department</a>
                   <li><a href="#">Clothing</a></li>
                   <li><a href="#">Outdoors</a></li>
                   <li><a href="#">Music</a></li>
                   <li><a href="#">Outdoors</a></li>
                   <li><a href="#">Clothing</a></li>
                   <li><a href="#">Electronics</a></li>
                </ul>
                   </li>
                 </div>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Templates <i class="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Archive Page</a></li>
                  <li><a className="dropdown-item" href="#">Archive Audio</a></li>
                  <li><a className="dropdown-item" href="#">Archive Video</a></li>
                  <li><a className="dropdown-item" href="#">Author Page</a></li>
                  <li><a className="dropdown-item" href="#">Search Page</a></li>
                  <li><a className="dropdown-item" href="#">Single Template</a></li>
                  <li><a className="dropdown-item" href="#">Single Gallery</a></li>
                  <li><a className="dropdown-item" href="#">Single Audio</a></li>
                  <li><a className="dropdown-item" href="#">Single Video</a></li>


                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other pages <i class="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Contact us</a></li>
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Signup</a></li>
                  <li><a className="dropdown-item" href="#">Forgot Password</a></li>
                  <li><a className="dropdown-item" href="#">Dashboard</a></li>
                  <li><a className="dropdown-item" href="#">Subscription</a></li>


                </ul>
              </li>

            </ul>
           <div className="right-element">
               <div className="elements">
                   <div className="moon">
                   <i class="fas fa-moon"></i>
                   </div>

                   <div className="search">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{color: 'rgb(209,213,219)'}} viewBox="0 0 32 32" width="32px" height="32px"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"/></svg>
                   </div>

                   <div className="sign">
                       <a href="#">Sign up</a>
                   </div>
               </div>
           </div>
          </div>
        </div>
      </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
