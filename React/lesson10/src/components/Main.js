import React from 'react';
import '../sass/style.css';
import logo from '../images/logo.png';

const openBar = () => {
  document.getElementById("slidenav").style.width="500px";
  document.getElementById("searchicon").style.display="none"

}

const closeBar =() => {
  document.getElementById("slidenav").style.width="0";
  document.getElementById("closeicon").style.display="block"

}




function Main() {
    return (
        <div className="main">
            <div className="header">
          <div className="container">
          <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo}  /></a>
         
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Explore <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Explore Style 1</a></li>
            <li><a class="dropdown-item" href="#">Explore Style 2</a></li>
            <li><a class="dropdown-item" href="#">Explore Style 3</a></li>
            <li><a class="dropdown-item" href="#">Explore Style 4</a></li>
            <li><a class="dropdown-item" href="#">Live Auctions</a></li>
            <li><a class="dropdown-item" href="#">Item Details</a></li>
          </ul>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activity</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Blog</a></li>
            <li><a class="dropdown-item" href="#">Blog Single</a></li>
            <li><a class="dropdown-item" href="#">Help Center</a></li>
          </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Authors</a></li>
            <li><a class="dropdown-item" href="#">Author</a></li>
            <li><a class="dropdown-item" href="#">Wallet Connect</a></li>
            <li><a class="dropdown-item" href="#">Create </a></li>
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><a class="dropdown-item" href="#">Signup</a></li>

          </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
           
          </div>
          <ul className="navbar-nav icons">
            <li className="nav-item">
                <a className="nav-link" href="#" id="searchicon" onClick="openBar()">
                <i class="fas fa-search"></i>
                </a>
              </li>
            </ul>

            <div id="slidenav" className="slidenav">
             <div className="modal-dialog">
             <div className="modal-content">
                <div className="modal-header">
                  <h5>Search</h5>
                 <a href="javascript:void(0)" id="closeicon" onclick="closeBar()"> <i class="far fa-times-circle"></i></a>
                </div>

                <div className="modal-body">
                  <form className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 pb-3">
                          <h2 className="search-title">What are you looking for?</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 input-group mt-4">
                          <input type="text" placeholder="Enter your keywords" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 input-group mt-4">
                         <button className="btn search">Search</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
             </div>
            </div>

            <ul className="navbar-nav action">
                <li className="nav-item">
                    <a href="#" className="nav-link connect">
                    <i class="fas fa-wallet"></i>
                   Wallet Connect
                   
                    </a>
                </li>
            </ul>
        </div>
      </nav>
          </div>
            </div>

            <section className="hero-section">
              <div className="container">
                  <div className="row">
                      <div className="col-12 col-md-6 col-lg-7">
                          <span className="storm">NETSTORM</span>
                          <h1 className="discover mt-4">Discover, collect, and sell extraordinary NFTs</h1>
                        <p className="hero-text">Explore on the world's best & largest NFT marketplace</p>
                        <div className="button-group">
                            <a href="#" className="btn btn-bordered-white"><i class="fas fa-rocket"></i> Explore</a>
                            <a href="#" className="btn btn-bordered-white"><i class="far fa-edit"></i> Create</a>

                        </div>
                      </div>
                  </div>
              </div>
              <div className="shape">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1"><defs><linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1">
                      <stop stop-color="rgba(69,40,220, 0.15)" offset="0%"></stop><stop stop-color="rgba(87,4,138, 0.15)" offset="100%"></stop></linearGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <polygon fill="url(#linearGradient-1)"><animate id="graph-animation" xmlns="http://www.w3.org/2000/svg" dur="2s" attributeName="points" values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" fill="freeze"></animate></polygon></g></svg>
              </div>
            </section>
        </div>
    )
}

export default Main
