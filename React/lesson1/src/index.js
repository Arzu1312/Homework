import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/style.scss';
import logo from './logo.png';
import img1 from './img-1.png';
import img2 from './icon-4.png';
import img3 from './icon-5.png';
import img4 from './icon-6.png';
import img5 from './img-12.png';
import img6 from './img-13.png';
import img7 from './bg-video.png';
import tool1 from './tool-1.png';
import tool2 from './tool-2.png';
import tool3 from './tool-3.png';
import tool4 from './tool-4.png';
import tool5 from './tool-5.png';
import tool6 from './tool-6.png';
import tool7 from './tool-7.png';
import tool8 from './tool-8.png';
import img8 from './img-10.png';
import img9 from './img-11.png';
import faq from './img-faq.png';
import img10 from './is-badge.png';
import img11 from './an-badge.png';
import quote from './quote.png';
import profile1 from './profile-img.jpg';
import profile2 from './profile-img-2.jpg';
import profile3 from './profile-img-3.jpg';








var root = document.getElementById("root");

var temp = (
    <div>
    <div className="header">
    <nav className="navbar navbar-expand-lg" style={{"height":"85px"}}>
  <div className="container">
  <img src={logo}/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active  dropdown-toggle" aria-aria-current="page" href="#">Demos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Feature</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           Overview
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Working Step</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <div className="buton" >
      <a href="#" >Get it now</a>
    </div>
      </ul>
    
    </div>
  </div>
</nav>
    </div>

<div className="hero"  >
  <div className="hero-content">
    <div className="container">
      <div className="box">
        <div className="text">
          <div className="clip-text">INTRODUCING XAPPOX</div>
          <h2>Make the world's software more accessible</h2>
          <p className="interface">A gorgeous new interface keeps your canvas the focus while giving you all the power.</p>
          <div className="download-buton">
            <a href="#" className="orange">Download Now</a>
          </div>
        </div>

        <div className="image">
          <img src={img1} />
        </div>
      </div>
    </div>
  </div>
</div>

<section className="part2">
<div className="container">
<div className="title">
    <h4>Join millions getting more mindful with Headspace</h4>
  </div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  
<div className="col" >
  <div className="card">
     <img src={img2} />
      <div className="card-body" >
        <h5 className="card-title">4.5 Stars</h5>
        <p className="card-text">Averege Ratings</p>
      </div>
    </div>
  </div>
  <div className="col" >
    <div className="card">
    <img src={img3} />
      <div className="card-body">
        <h5 className="card-title">611.9K Ratings</h5>
        <p className="card-text">On iOS and Google Play</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={img4} />
      <div className="card-body">
        <h5 className="card-title">66M Members</h5>
        <p className="card-text">Across all platforms</p>
      </div>
    </div>
  </div>
  
</div>
  </div>
</section>

<section className="part3">
  <div className="container">
    <div className="image-box">
      <div className="title">
        <h4>Your well-oiled machine doesn’t have to break due to complex processes</h4>
      </div>

      <div className="images">
        <div className="item" >
         <img src={img5} />
          <div className="text">
            <h5>Tailor your profile We not only cater to those up</h5>
         <p>Your well-oiled machine doesn’t have to break down due to complex build processes, or lack of time to enforce consistency.</p>
          </div>
        </div>

        <div className="item" >
         <img src={img6} />
          <div className="text">
            <h5>Output optimized images with one click</h5>
         <p>Your well-oiled machine doesn’t have to break down due to complex build processes, or lack of time to enforce consistency.
         </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="part4">
  <div className="container">
    <div className="video-box">
       <div className="video-wrapper">
         <img src={img7}/>

         <div className="play-buton">
           <a href="#">
           <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" viewBox="0 0 448 512">
             <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>
           </a>
         </div>
       </div>
    </div>
  </div>
</section>

<section className="part5">
  <div className="tools">
    <div className="tool-text">
      <h4>Get more from your existing tools</h4>
      <p>With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
    </div>

    <div className="image-carousel">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={tool1} />
      <img src={tool2} />
      <img src={tool3} />
      <img src={tool4} />
      <img src={tool5} />
      <img src={tool6} />
      <img src={tool7} />
      <img src={tool8} />

    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={tool1} />
      <img src={tool2} />
      <img src={tool3} />
      <img src={tool4} />
      <img src={tool5} />
      <img src={tool6} />
      <img src={tool7} />
      <img src={tool8} />
    </div>
    <div className="carousel-item">
    <img src={tool1} />
      <img src={tool2} />
      <img src={tool3} />
      <img src={tool4} />
      <img src={tool5} />
      <img src={tool6} />
      <img src={tool7} />
      <img src={tool8} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  </div>
</section>
 
<section className="part6">
  <div className="container">
    <div className="icon-box">
      <div className="title">
      <h4>3 simple steps to enjoy</h4>
      </div>
      
       <div className="step">
       <div className="step-item">
          <div className="step-list">
            <div className="number">
              <span>1</span>
            </div>
            <div className="icon">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50" width="50px" height="50px">
                <path fill="currentColor" d="M 29 3 C 28.0625 3 27.164063 3.382813 26.5 4 C 25.835938 4.617188 25.363281 5.433594 25 6.40625 C 24.355469 8.140625 24.085938 10.394531 24.03125 13.03125 C 19.234375 13.179688 14.820313 14.421875 11.28125 16.46875 C 10.214844 15.46875 8.855469 14.96875 7.5 14.96875 C 6.089844 14.96875 4.675781 15.511719 3.59375 16.59375 C 1.425781 18.761719 1.425781 22.238281 3.59375 24.40625 L 3.84375 24.65625 C 3.3125 26.035156 3 27.488281 3 29 C 3 33.527344 5.566406 37.585938 9.5625 40.4375 C 13.558594 43.289063 19.007813 45 25 45 C 30.992188 45 36.441406 43.289063 40.4375 40.4375 C 44.433594 37.585938 47 33.527344 47 29 C 47 27.488281 46.6875 26.035156 46.15625 24.65625 L 46.40625 24.40625 C 48.574219 22.238281 48.574219 18.761719 46.40625 16.59375 C 45.324219 15.511719 43.910156 14.96875 42.5 14.96875 C 41.144531 14.96875 39.785156 15.46875 38.71875 16.46875 C 35.195313 14.433594 30.800781 13.191406 26.03125 13.03125 C 26.09375 10.546875 26.363281 8.46875 26.875 7.09375 C 27.164063 6.316406 27.527344 5.757813 27.875 5.4375 C 28.222656 5.117188 28.539063 5 29 5 C 29.460938 5 29.683594 5.125 30.03125 5.40625 C 30.378906 5.6875 30.785156 6.148438 31.3125 6.6875 C 32.253906 7.652344 33.695313 8.714844 36.09375 8.9375 C 36.539063 11.238281 38.574219 13 41 13 C 43.75 13 46 10.75 46 8 C 46 5.25 43.75 3 41 3 C 38.605469 3 36.574219 4.710938 36.09375 6.96875 C 34.3125 6.796875 33.527344 6.109375 32.75 5.3125 C 32.300781 4.851563 31.886719 4.3125 31.3125 3.84375 C 30.738281 3.375 29.9375 3 29 3 Z M 41 5 C 42.667969 5 44 6.332031 44 8 C 44 9.667969 42.667969 11 41 11 C 39.332031 11 38 9.667969 38 8 C 38 6.332031 39.332031 5 41 5 Z M 25 15 C 30.609375 15 35.675781 16.613281 39.28125 19.1875 C 42.886719 21.761719 45 25.226563 45 29 C 45 32.773438 42.886719 36.238281 39.28125 38.8125 C 35.675781 41.386719 30.609375 43 25 43 C 19.390625 43 14.324219 41.386719 10.71875 38.8125 C 7.113281 36.238281 5 32.773438 5 29 C 5 25.226563 7.113281 21.761719 10.71875 19.1875 C 14.324219 16.613281 19.390625 15 25 15 Z M 7.5 16.9375 C 8.203125 16.9375 8.914063 17.148438 9.53125 17.59375 C 7.527344 19.03125 5.886719 20.769531 4.75 22.71875 C 3.582031 21.296875 3.660156 19.339844 5 18 C 5.714844 17.285156 6.609375 16.9375 7.5 16.9375 Z M 42.5 16.9375 C 43.390625 16.9375 44.285156 17.285156 45 18 C 46.339844 19.339844 46.417969 21.296875 45.25 22.71875 C 44.113281 20.769531 42.472656 19.03125 40.46875 17.59375 C 41.085938 17.148438 41.796875 16.9375 42.5 16.9375 Z M 17 22 C 14.800781 22 13 23.800781 13 26 C 13 28.199219 14.800781 30 17 30 C 19.199219 30 21 28.199219 21 26 C 21 23.800781 19.199219 22 17 22 Z M 33 22 C 30.800781 22 29 23.800781 29 26 C 29 28.199219 30.800781 30 33 30 C 35.199219 30 37 28.199219 37 26 C 37 23.800781 35.199219 22 33 22 Z M 17 24 C 18.117188 24 19 24.882813 19 26 C 19 27.117188 18.117188 28 17 28 C 15.882813 28 15 27.117188 15 26 C 15 24.882813 15.882813 24 17 24 Z M 33 24 C 34.117188 24 35 24.882813 35 26 C 35 27.117188 34.117188 28 33 28 C 31.882813 28 31 27.117188 31 26 C 31 24.882813 31.882813 24 33 24 Z M 34.15625 33.84375 C 34.101563 33.851563 34.050781 33.859375 34 33.875 C 33.683594 33.9375 33.417969 34.144531 33.28125 34.4375 C 33.28125 34.4375 32.757813 35.164063 31.4375 36 C 30.117188 36.835938 28.058594 37.6875 25 37.6875 C 21.941406 37.6875 19.882813 36.835938 18.5625 36 C 17.242188 35.164063 16.71875 34.4375 16.71875 34.4375 C 16.492188 34.082031 16.066406 33.90625 15.65625 34 C 15.332031 34.082031 15.070313 34.316406 14.957031 34.632813 C 14.84375 34.945313 14.894531 35.292969 15.09375 35.5625 C 15.09375 35.5625 15.863281 36.671875 17.46875 37.6875 C 19.074219 38.703125 21.558594 39.6875 25 39.6875 C 28.441406 39.6875 30.925781 38.703125 32.53125 37.6875 C 34.136719 36.671875 34.90625 35.5625 34.90625 35.5625 C 35.207031 35.273438 35.296875 34.824219 35.128906 34.441406 C 34.960938 34.058594 34.574219 33.820313 34.15625 33.84375 Z"/></svg>
              </span>
            </div>
            <h6>Tailor your profile We not only cater to those up.</h6>
          </div>
        </div>

        <div className="step-item">
          <div className="step-list">
            <div className="number">
            <span>2</span>
            </div>
            <div className="icon">
           <span>
           <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" viewBox="0 0 384 512">
             <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
           </span>
            </div>
            <h6>Explore nearby Whether you’re new to an area.</h6>
          </div>
        </div>

        <div className="step-item">
          <div className="step-list">
            <div className="number">
            <span>3</span>
            </div>
            <div className="icon">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile" class="svg-inline--fa fa-smile fa-w-16" role="img" viewBox="0 0 496 512">
              <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"/></svg>
            </span>
            </div>
            <h6>Make real connections We’re all about matching users.</h6>
          </div>
        </div>
       </div>
  
    </div>
  </div>
</section>

<section className="part7">
  <div className="container">
    <div className="top-box">
      <div className="main">
        <div className="image-box">
        <img src={img8} />
        </div>
      <div className="text-box">
        <div className="overview-text">
          <h4>Boost productivity without creativity</h4>
          <p>With a massive range of powerful new features with a gorgeous new interface, Our app is easier to use and more versatile than ever before.</p>
        <ul>
          <li>
            <div className="icon">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width='16px' height='16px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="svg-inline--fa fa-palette fa-w-16" role="img" viewBox="0 0 512 512">
              <path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>
            </span>
            </div>
            <div className="text">40+ design and code tutorials</div>
          </li>
          <li>
          <div className="icon">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width='16px' height='16px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" class="svg-inline--fa fa-bolt fa-w-10" role="img" viewBox="0 0 320 512">
            <path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"/></svg>
          </span>
          </div>
            <div className="text">Inspiration from Apple iOS 7</div>
          </li>
          <li>
          <div className="icon">
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" width='16px' height='16px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class="svg-inline--fa fa-power-off fa-w-16" role="img" viewBox="0 0 512 512">
            <path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"/></svg>
         </span>
          </div>
            <div className="text">Available to the public, 100% FREE!</div>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </div>

    <div className="bottom-box">
      <div className="main">
  
      <div className="text-box">
        <div className="overview-text">
          <h4>Create, collaborate, and celebrate</h4>
          <p>With a massive range of powerful new features with a gorgeous new interface, Our app is easier to use and more versatile than ever before.</p>
         <div className="get-btn">
         <a href="#">Get It Now</a>
         </div>
        </div>
      </div>

      <div className="image-box">
        <img src={img9} />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="part8">
  <div className="container">
    <div className="pricing-wrapper">
          <div className="pricing-title">
            <h4>Reasonable Pricing Plans</h4>
            <p>With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
          </div>

          <div className="pricing-plan">
          <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <h5>Free</h5>
      <h3>
        <span className="rate">$0</span>
        <span className="meta"> / month</span>
      </h3>
      <div className="card-body">
       <ul>
         <li>24/7 Support</li>
         <li>Free Update</li>
         <li>unimited download</li>
         <li>1 Year Licnese</li>
         <li>Source files</li>
       </ul>

       <div className="pricing-footer">
         <a href="#">Try iT Now</a>
       </div>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card gradient">
    <h5>Popular Plan</h5>
      <h3>
        <span className="rate">$20</span>
        <span className="meta"> / month</span>
      </h3>
      <div className="card-body">
       <ul>
         <li>24/7 Support</li>
         <li>Free Update</li>
         <li>unimited download</li>
         <li>1 Year Licnese</li>
         <li>Source files</li>
       </ul>

       <div className="pricing-footer">
         <a href="#" className='white-btn'>Try iT Now</a>
       </div>
      </div>
     
        
      
    </div>
  </div>
  <div className="col">
    <div className="card">
    <h5>Business Plan</h5>
      <h3>
        <span className="rate">$100</span>
        <span className="meta"> / month</span>
      </h3>
      <div className="card-body">
       <ul>
         <li>24/7 Support</li>
         <li>Free Update</li>
         <li>unimited download</li>
         <li>1 Year Licnese</li>
         <li>Source files</li>
       </ul>

       <div className="pricing-footer">
         <a href="#">Try iT Now</a>
       </div>
      </div>
     
    </div>
  </div>
  
</div>
          </div>
    </div>
  </div>
</section>

<section className="part9">
  <div className="container">
    <div className="faq-wrapper">
      <div className="faq">
        <div className="faq-title">
          <h4>Frequently Asked Quetions</h4>
          <p>With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
        
        </div>
        <div className="faq-box">
          <div className="faq-items">
            <div className="first">
             <div className="item">
               <div className="icon">
                 <span>?</span>
               </div>
                <div className="faq-text">
                  <h5>How to install ?</h5>
                  <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
                </div>

             </div>

             <div className="item">
               <div className="icon">
                 <span>?</span>
               </div>
                <div className="faq-text">
                  <h5>Where i can get this?</h5>
                  <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
                </div>

             </div>

             <div className="item">
               <div className="icon">
                 <span>?</span>
               </div>
                <div className="faq-text">
                  <h5>Validity of use?</h5>
                  <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
                </div>

             </div>
            </div>


            <div className="second">
            <div className="item">
               <div className="icon">
                 <span>?</span>
               </div>
                <div className="faq-text">
                  <h5>Is this free ?</h5>
                  <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
                </div>

             </div>

             <div className="item">
               <div className="icon">
                 <span>?</span>
               </div>
                <div className="faq-text">
                  <h5>Can i get refund ?</h5>
                  <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
                </div>

             </div>

             <div className="item">
               <div className="icon">
                 <span>?</span>
               </div>
                <div className="faq-text">
                  <h5>How to use this?</h5>
                  <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
                </div>

             </div>
            </div>
          </div>

          <div className="faq-image">
            <img src={faq}  />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="part10">
  <div className="container">
    <div className="organization">
      <div className="organization-title">
        <h4>Join of our community of 20,0000 users of the world’s leading organizations</h4>
      
      <div className="organization-btn">
        <a href="#">
          <img src={img10} />
        </a>
        <a href="#" className="play">
          <img src={img11} />
        </a>
      </div>
      </div>

    </div>
  </div>
</section>

<section className="part11">
  <div className="container">
    <div className="count">
      <div className="count-box">

        <div className="count-text">
          <div className="item">
            <div className="counter-text">
              <h4 className="heading">
                <span className="counter">789</span>
                <span className="sign">M</span>
              </h4>
              <p>Total Downloads</p>
            </div>
          </div>
        </div>

        <div className="count-text">
          <div className="item">
            <div className="counter-text">
              <h4 className="heading">
                <span className="counter">99</span>
                <span className="sign">%</span>
              </h4>
              <p>Page Speed</p>
            </div>
          </div>
        </div>

        <div className="count-text">
          <div className="item">
            <div className="counter-text">
              <h4 className="heading">
                <span className="counter">10</span>
                <span className="sign">+</span>
              </h4>
              <p>Years Top Rating App</p>
            </div>
          </div>
        </div>

        <div className="count-text">
          <div className="item">
            <div className="counter-text">
              <h4 className="heading">
                <span className="counter">100</span>
                <span className="sign">M</span>
              </h4>
              <p>Happy Users</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<section className="part12">
  <div className="container">
    <div className="testimonial-title">
      <h4>Trusted by teams at over 200,000</h4>
      <p>With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
    </div>

    <div className="testimonial-box">
  <div className="card-box">
    <div className="card">
      <img src={quote} />
      <div className="card-body">
       <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
      <div className="profile-img">
      <img src={profile1} className="profile" />
      </div>
      <div className="info">
        <h6>Roger Bentham</h6>
        <p>Manager</p>
      </div>
      </div>
    </div>
  </div>

  <div className="card-box">
    <div className="card">
    <img src={quote} />
      <div className="card-body">
      <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
      <div className="profile-img">
      <img src={profile2} className="profile"/>
      </div>
      <div className="info">
        <h6>Roger Bentham</h6>
        <p>Manager</p>
      </div>
      </div>
    </div>
  </div>

  <div className="card-box">
    <div className="card">
    <img src={quote} />
      <div className="card-body">
      <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
      <div className="profile-img">
      <img src={profile3} className="profile" />
      </div>
      <div className="info">
        <h6>Roger Bentham</h6>
        <p>Manager</p>
      </div>
      </div>
    </div>
  </div>

  <div className="card-box">
    <div className="card">
    <img src={quote} />
      <div className="card-body">
      <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
      <div className="profile-img">
      <img src={profile1} className="profile" />
      </div>
      <div className="info">
        <h6>Roger Bentham</h6>
        <p>Manager</p>
      </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</section>

<section className="part13">
  <div className="container">
    <div className="subscribe">
      <div className="subscribe-text">
        <h4>Subscribe for latest email</h4>
      </div>

      <div className="subscribe-btn">
        <form  method="GET">
          <div className="form-group">
            <input type="email" placeholder="Enter your Email" />
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</section>

<section className="footer">
  <div className="container">
    <div className="footer-group">
      <div className="first">
        <a href="#">
          <img src={logo} />
        </a>
       <p>
       Focus on what matters—building a great user experience. Use your native visualization components.
       </p>
      </div>

      <div className="second">
        <h6>Product</h6>
        <ul>
          <li>Features</li>
          <li>Stories</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="third">
        <h6>Support</h6>
        <ul>
          <li>Terms & Condition</li>
          <li>API</li>
          <li>Customers</li>
        </ul>
      </div>

      <div className="last">
        <h6>Follow Us</h6>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Pinterest</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
)

ReactDOM.render(temp,root);