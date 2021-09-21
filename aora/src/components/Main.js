import React from 'react';
import '../sass/style.css';
import bg1 from '../images/bg-slider1.jpg';
import bg2 from '../images/bg-slider2.jpg';


const Main = () => {
    return (
        <div className="main">
            <section className="main-section">
                <div className="elementor-container">
                    <div className="elementor-column">
                        <div className="elementor-widget">
                            <div className="elementor-element">
                                <div className="elementor-widget-container">
                                    <div className="revslider">
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                         <div className="carousel-inner">
                                           <div className="carousel-item active" >
                                            <img src={bg1}  width="1530px" height="400px" />
                                            <div className="layer-wrap">
                                                <h1 className=" animate__animated animate__slideInDown">
                                                    <span>Korean</span> Fabric <br />  
                                                    Wooden Sofa 
                                                </h1>

                                                <p className="animate__animated animate__slideInUp">Big sale up to</p>
                                                <h4 className="animate__animated animate__slideInUp">$129.99</h4>

                                                <div className="shop-btn">
                                                    <a href="#">Shop Now</a>
                                                </div>
                                            </div>
                                           </div>
                                 
                                 
                                           <div className="carousel-item nextslider">
                                           <img src={bg2}  width="1530px" height="400px" />
                                           <div className="layer-wrap">
                                               <h1 className=" animate__animated animate__slideInDown">
                                                   Buy <span>Your Own</span> <br />
                                                   Home Interior
                                               </h1>
                                               <p className="animate__animated animate__slideInUp">Buy thousands from</p>

                                               <h4 className="animate__animated animate__slideInUp">$19.99</h4>

                                               <div className="shop-btn">
                                                    <a href="#">Shop Now</a>
                                                </div>
                                           </div>
                                           </div>
                                         
                                         </div>
                                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                                           <span className="carousel-control-prev-icon prev" aria-hidden="true" style={{marginLeft:"150px", transform:"translateY(-100px)"}} />
                                           <span className="visually-hidden" >Previous</span>
                                         </button>
                                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                           <span className="carousel-control-next-icon next" aria-hidden="true" style={{marginRight:"150px", transform:"translateY(-100px)"}} />
                                           <span className="visually-hidden">Next</span>
                                         </button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
