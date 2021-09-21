import React from 'react';
import { useState } from 'react';
// import { useCart } from 'react-use-cart';
import { useCart} from 'react-use-cart';
import { Link } from 'react-router-dom';
import '../sass/style.css';
import logo from '../images/logo.png';
import banner1 from '../images/banner-home2-01.jpg';
import product1 from '../images/product-1.jpg';
import product2 from '../images/product-2.jpg';
import product3 from '../images/product-3.jpg';
import product4 from '../images/product-4.jpg';
import product5 from '../images/product-5.jpg';
import product6 from '../images/product-6.jpg';
import product7 from '../images/product-7.jpg';
import product8 from '../images/product-8.jpg';
import product9 from '../images/product-9.jpg';
import product10 from '../images/product-10.jpg';

const Card = () => {

    const {isEmpty,
        totalUniqueItems,
        items,totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyItem,
        emptyCart, } = useCart();

        if (isEmpty) return <h1 className="text-center"></h1>
            
        

    return (
      <span>{totalItems}</span>
    )
}


const Header = () => {
    const {totalItems} = useCart();
   
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

   

    return (
        <div className="header">
            <header className="site-header">
               <div className="elementor">
                   <div className="elementor-section">
                       <section className="elementor-top">
                           <div className="elementor-container">
                               <div className="elementor-column">
                                   <div className="elementor-widget">
                                        <div className="elementor-element">
                                            <div className="header-logo">
                                                <Link to="/">
                                                    <img src={logo} className="logo" />
                                                </Link>
                                            </div>
                                        </div>
                                   </div>
                               </div>

                               <div className="elementor-column">
                                   <div className="elementor-widget">
                                        <div className="elementor-element">
                                            <div className="elementor-widget-container">
                                                 <div className="search-form">
                                                     <form method="GET" className="aora-search">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                 <input type="text" className="tbay-search" placeholder="Search in 20.000+ products..." />
                                                                 <div className="select-category">
                                                                     <div className="sumoselect">
                                                                     <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                       <option selected>All</option>
                                                                       <option value="1">Art and Decor (6)</option>
                                                                       <option value="2">Bathroom (5)</option>
                                                                       <option value="3">Bedding (5)</option>
                                                                       <option value="4">Fashion (5)</option>
                                                                       <option value="5">Furniture (11)</option>
                                                                       <option value="6">Graphics Tshirts (1)</option>
                                                                       <option value="7">Lighting (5)</option>
                                                                       <option value="8">Phone Accessories (3)</option>
                                                                       <option value="9">Rugs & Curtains (3)</option>
                                                                       <option value="10">Shoes (2)</option>
                                                                       <option value="11">Vintage (4)</option>
                                                                       <option value="13">Kitchen Accessories (6)</option>

                                                                      </select>
                                                                     </div>
                                                                 </div>

                                                                 <div className="button-group">
                                                                     <button type="submit" className="btn button-search btn-sm">
                                                                       <span className="text">Search</span>
                                                                     </button>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </form>
                                                 </div>
                                            </div>
                                        </div>
                                   </div>
                               </div>

                               <div className="elementor-column">
                                   <div className="elementor-icon">
                                        <div className="elementor-element">
                                            <div className="elementor-icon-container">
                                                <div className="wishlist-icon">
                                                    <a href="#" className="wishlist">
                                                        <i class="far fa-heart"></i>
                                                        <span className="count-wishlist">0</span>
                                                        </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="elementor-element">
                                            <div className="elementor-icon-container">
                                                <div className="mini-cart-icon">
                                                    <div className="cart-popup">
                                                    <Link to="/cart" className="mini-cart">
                                                    <i className="fas fa-shopping-bag"></i>
                                                        <span className="mini-cart-items"><Card/></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="elementor-element">
                                            <div className="elementor-icon-container">
                                                <div className="account-icon">
                                                    <div className="login">
                                                    <a href="#" className="account-button">
                                                    <i className="far fa-user"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                               </div>
                           </div>
                       </section>

                       <section className="elementor-bottom">
                           <div className="elementor-container">
                               <div className="elementor-column">
                                <div className="elementor-widget">
                                <div className="elementor-element">
                                    <div className="elementor-widget-container">
                                     <div className="nav-menu">
                                         <div className="menu-btn">
                                             <a href="#" onClick={showSidebar} > 
                                             <i class="fas fa-bars"></i>
                                             <h4 className="icon-title">All Departments</h4>
                                             </a>
                                        
                                         </div>

                                         <div className="menu-canvas">
                                             
                                             <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                                             <a href="#" className="canvas-close">
                                             <i class="fas fa-times"></i>
                                             </a>
                                             <h3 className="canvas-title">All Departments</h3>
                                                 <ul className="canvas-categories" onClick={showSidebar}>
                                                     <li className="canva-item"><a href="#">Art and Decor</a></li>
                                                     <li className="canva-item"><a href="#">Bedding</a></li>
                                                     <li className="canva-item"><a href="#">Furniture</a></li>
                                                     <li className="canva-item"><a href="#">Vintage</a></li>
                                                     <li className="canva-item"><a href="#">Rugs & Curtains</a></li>
                                                     <li className="canva-item"><a href="#">Lighting</a></li>
                                                     <li className="canva-item"><a href="#">Kitchen Accessories</a></li>
                                                     <li className="canva-item"><a href="#">Bathroom</a></li>
                                                     <li className="item"><a href="#">Shoes</a></li>
                                                 </ul>
                                             </nav>
                                         </div>
                                     </div>
                                    </div>
                                </div>
                                </div>
                               </div>

                               <div className="elementor-column">
                               <div className="elementor-widget">
                                <div className="elementor-element">
                                    <div className="elementor-widget-container">
                                     <div className="nav-menu">
                                     <nav className="navbar navbar-expand-lg navbar-light ">
                              <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                  <ul className="navbar-nav">

                                  <li className="nav-item dropdown">
                                      <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{"color":"#232323","borderBottom":"3px solid #fcb800"}}>
                                      Home <i class="fas fa-chevron-down"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{"width":"1000px"}}>
                                        <div className="inner">
                                        <li><a className="dropdown-item" href="#">Home Page</a>
                                         <ul className="inner-item">
                                             <li><a href="#" style={{borderBottom:"1px solid #232323"}}>Home 1</a></li>
                                             <li><a href="#">Home 2</a></li>
                                             <li><a href="#">Home 3</a></li>
                                             <li><a href="#">Quantity Mode</a></li>
                                             <li><a href="#">Catalog Mode</a></li>
                                             <li><a href="#">Home RTL</a></li>
                                         </ul>
                                         </li>

                                         <li><a className="dropdown-item" href="#">Home Dokan</a>
                                         <ul className="inner-item">
                                             <li><a href="#">Home 1</a></li>
                                             <li><a href="#">Home 2</a></li>
                                             <li><a href="#">Home 3</a></li>
                                             <li><a href="#">Quantity Mode</a></li>
                                             <li><a href="#">Catalog Mode</a></li>
                                             <li><a href="#">Home RTL</a></li>
                                         </ul>
                                         </li>

                                         <li><a className="dropdown-item" href="#">Home Wcfm</a>
                                         <ul className="inner-item">
                                             <li><a href="#">Home 1</a></li>
                                             <li><a href="#">Home 2</a></li>
                                             <li><a href="#">Home 3</a></li>
                                             <li><a href="#">Quantity Mode</a></li>
                                             <li><a href="#">Catalog Mode</a></li>
                                             <li><a href="#">Home RTL</a></li>
                                         </ul>
                                         </li>

                                         <li><a className="dropdown-item" href="#">Home Wcmp</a>
                                         <ul className="inner-item">
                                             <li><a href="#">Home 1</a></li>
                                             <li><a href="#">Home 2</a></li>
                                             <li><a href="#">Home 3</a></li>
                                             <li><a href="#">Quantity Mode</a></li>
                                             <li><a href="#">Catalog Mode</a></li>
                                             <li><a href="#">Home RTL</a></li>
                                         </ul>
                                         </li>

                                         <li><a className="dropdown-item" href="#">Home WCVendors</a>
                                         <ul className="inner-item">
                                             <li><a href="#">Home 1</a></li>
                                             <li><a href="#">Home 2</a></li>
                                             <li><a href="#">Home 3</a></li>
                                             <li><a href="#">Quantity Mode</a></li>
                                             <li><a href="#">Catalog Mode</a></li>
                                             <li><a href="#">Home RTL</a></li>
                                         </ul>
                                         </li>

                                        </div>
                                      </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                      <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Promotions <i class="fas fa-chevron-down"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{"width":"900px"}}>
                                       <div className="inner">
                                       <li><a className="dropdown-item" href="#">Bedding</a>
                                        <ul className="inner-item">
                                             <li><a href="#">Cheap Plain White Cotton Twin</a></li>
                                             <li><a href="#">Supply Medical exam table couch roll</a></li>
                                             <li><a href="#">Microfiber Fabric Bedding</a></li>
                                             <li><a href="#">Elegant Style Satin with Digital</a></li>
                                             <li><a href="#">Egyptian Cotton Beddinge</a></li>
                                             
                                         </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Furniture</a>
                                        <ul className="inner-item">
                                             <li><a href="#">Puma Mens Pacer</a></li>
                                             <li><a href="#">Ferndale Coffee Table</a></li>
                                             <li><a href="#">Hamilton Dresser Mirror</a></li>
                                             <li><a href="#">Pinto Accent Chair</a></li>
                                             <li><a href="#">Venjakob Dining Table</a></li>
                                             
                                         </ul>
                                        
                                        </li>
                                        <li>
                                        <div className="banner">
                                               <div className="main-img">
                                                   <div className="banner-img">
                                                       <img src={banner1} classname="banner-1" />
                                                   </div>

                                               </div>

                                               <div className="wrapper-content-banner">
                                                   <div className="content-banner">
                                                       <h3 className="banner-title">
                                                           <span>
                                                               Donec 
                                                               <br />
                                                               Fringilla
                                                           </span>
                                                       </h3>
                                                       <div className="banner-desc">
                                                           Aliquam eget
                                                       </div>
                                                   </div>
                                               </div>
                                            </div></li>
                                       </div>
                                      </ul>
                                    </li>

                                  <li className="nav-item dropdown">
                                      <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Shop <i class="fas fa-chevron-down"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{"width":"700px"}}>
                                       <div className="inner">
                                       <li><a className="dropdown-item" href="#">Shop Layout</a>
                                       <ul className="inner-item">
                                             <li><a href="#">Shop Default</a></li>
                                             <li><a href="#">Shop Default Listing</a></li>
                                             <li><a href="#">Shop No Side bar</a></li>
                                             <li><a href="#">Ajax + Cart at Left</a></li>
                                             <li><a href="#">Ajax + Cart at Right</a></li>
                                             <li><a href="#">Ajax + Cart Popup</a></li>
                                             
                                         </ul>
                                       </li>
                                        <li><a className="dropdown-item" href="#">Product Types</a>
                                        <ul className="inner-item">
                                             <li><a href="#">Simple Product</a></li>
                                             <li><a href="#">Variable Product</a></li>
                                             <li><a href="#">Product Countdown</a></li>
                                             <li><a href="#">Affilate-Product</a></li>
                                             <li><a href="#">Product With Video</a></li>

                                         </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Product Layout</a>
                                        <ul className="inner-item">
                                             <li><a href="#">Product Image Horizontal</a></li>
                                             <li><a href="#">Product Sidebar</a></li>
                                             <li><a href="#">Product Sticky Menu Bar</a></li>
                                             <li><a href="#">Product Tabs Normal</a></li>
                                             <li><a href="#">Product Tabs Normal Accordion</a></li>
                                             <li><a href="#">Product Tabs Normal Full Text</a></li>
                                             <li><a href="#">Product Tabs After Add To Cart</a></li>

                                         </ul>
                                        </li>
                                       </div>
                                      </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                      <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog <i class="fas fa-chevron-down"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{"width":"500px"}}>
                                       <div className="inner">
                                       <li><a className="dropdown-item" href="#">Blog Archive</a>
                                       <ul className="inner-item">
                                             <li><a href="#">Blog Side Bar Right</a></li>
                                             <li><a href="#">Blog Side Bar Left</a></li>
                                             <li><a href="#">Blog Without SideBar </a></li>
                                             <li><a href="#">Blog Grid</a></li>
                                             <li><a href="#">Blog List</a></li>
                                             <li><a href="#">Blog Single</a></li>

                                         </ul>
                                       </li>
                                       <li><a className="dropdown-item" href="#">Blog Type</a>
                                       <ul className="inner-item">
                                             <li><a href="#">Standard Post</a></li>
                                             <li><a href="#">Image Post</a></li>
                                             <li><a href="#">Video Post </a></li>
                                             <li><a href="#">Audio Post</a></li>
                                             <li><a href="#">Gallery Post</a></li>

                                         </ul>
                                       </li>
                                     
                                       </div>
                                      </ul>
                                    </li>

                                  <li className="nav-item dropdown">
                                      <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Page <i class="fas fa-chevron-down"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">About Us</a></li>
                                        <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                        <li><a className="dropdown-item" href="#">FAQs</a></li>
                                        <li><a className="dropdown-item" href="#">Terms Of Use</a></li>

                                      </ul>
                                    </li>


                                    <li className="nav-item dropdown">
                                      <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Elements <i class="fas fa-chevron-down"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{"width":"500px"}}>
                                       <div className="inner">
                                       <li><a className="dropdown-item" href="#">Theme Element</a>
                                       <ul className="inner-item">
                                             <li><a href="#">Features</a></li>
                                             <li><a href="#">Post Elements</a></li>
                                             <li><a href="#">Brands </a></li>
                                             <li><a href="#">Newsletter</a></li>
                                             <li><a href="#">Social Share</a></li>

                                         </ul>
                                       </li>
                                        <li><a className="dropdown-item" href="#">WooCommerce Element</a>
                                        <ul className="inner-item">
                                             <li><a href="#">Best Selling Product</a></li>
                                             <li><a href="#">Product Attribute</a></li>
                                             <li><a href="#">On Sale Product </a></li>
                                             <li><a href="#">Product Categories Elements</a></li>
                                             <li><a href="#">Product Elements</a></li>
                                             <li><a href="#">Recently Viewed Products</a></li>
                                             <li><a href="#">Top Rated Products</a></li>


                                         </ul>
                                        </li>
                                        
                                       </div>
                                      </ul>
                                    </li>

                                    <li class="nav-item">
                                      <a class="nav-link" href="#">Flash Sale</a>
                                      </li>

                                    <li className="nav-item dropdown" style={{paddingLeft:"60px"}}>
                                      <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Recent Viewed <i class="fas fa-chevron-down"></i>
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{"marginLeft":"-800px"}}>
                                       <div className="content-view">
                                           <div className="list-recent">
                                               <div className="product-item">
                                                <img src={product1} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product2} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product3} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product4} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product5} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product6} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product7} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product8} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product9} className="product-image" />
                                               </div>
                                               <div className="product-item">
                                               <img src={product10} className="product-image" />
                                               </div>


                                           </div>

                                           <a href="#" className="btn-readmore">Read More</a>
                                       </div>
                                       
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                               </nav>
                                     </div>
                                    </div>
                                </div>
                                </div>
                                </div>

                           </div>
                       </section>
                   </div>
               </div>
            </header>
        </div>
    )
}

export default Header
