import React, { Component } from 'react';
import '../sass/style.css'
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import tag1 from '../images/img-tag-01.png';
import tag2 from '../images/img-tag-02.png';
import tag3 from '../images/img-tag-03.png';
import tag4 from '../images/img-tag-04.png';
import tag5 from '../images/img-tag-05.png';




const options = {
  
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: [" <" , ">"],
    smartSpeed: 1000,
    responsive: {
        
        1000: {
            items: 5,
        }
    },
  };

class Trending extends Component {
    render() {
        return (
            <div className="trending">
                <section className="trending-section">
                    <div className="elementor-container">
                        <div className="elementor-column">
                            <div className="elementor-widget">
                                <div className="elementor-element">
                                    <div className="elementor-widget-container">
                                        <div className="trend-list">
                                            <h3 className="heading-title">
                                                <span className="title">Now Trending</span>  <span className="subtitle">Items hand-picked by our shoppers</span>
                                            </h3>
                                          <div className="list-tags">
                                          <OwlCarousel items={5}  
                                                className="owl-theme"  
                                                loop  
                                                nav  
                                                margin={-50} >  
                                                  <div class='item'>
                                                      <div className="item-tag">
                                                       <a href="#">
                                                           <img src={tag1}  />
                                                       </a>

                                                       <div className="content">
                                                           <a href="#">#phone accessories</a>
                                                           <div className="tag-hover">
                                                               <span className="count-item">2 items</span>
                                                           </div>
                                                       </div>
                                                      </div>
                                                  </div>

                                                  <div class='item'>
                                                      <div className="item-tag">
                                                       <a href="#">
                                                           <img src={tag2}  />
                                                       </a>

                                                       <div className="content">
                                                           <a href="#">#accessories</a>
                                                           <div className="tag-hover">
                                                               <span className="count-item">4 items</span>
                                                           </div>
                                                       </div>
                                                      </div>
                                                  </div>

                                                  <div class='item'>
                                                      <div className="item-tag">
                                                       <a href="#">
                                                           <img src={tag3}  />
                                                       </a>

                                                       <div className="content">
                                                           <a href="#">#kitchen</a>
                                                           <div className="tag-hover">
                                                               <span className="count-item">4 items</span>
                                                           </div>
                                                       </div>
                                                      </div>
                                                  </div>

                                                 <div class='item'>
                                                      <div className="item-tag">
                                                       <a href="#">
                                                           <img src={tag4}  />
                                                       </a>

                                                       <div className="content">
                                                           <a href="#">#decor</a>
                                                           <div className="tag-hover">
                                                               <span className="count-item">2 items</span>
                                                           </div>
                                                       </div>
                                                      </div>
                                                  </div>

                                                 <div class='item'>
                                                      <div className="item-tag">
                                                       <a href="#">
                                                           <img src={tag5}  />
                                                       </a>

                                                       <div className="content">
                                                           <a href="#">#vintage</a>
                                                           <div className="tag-hover">
                                                               <span className="count-item">4 items</span>
                                                           </div>
                                                       </div>
                                                      </div>
                                                  </div>

                                                  <div class='item'>
                                                      <div className="item-tag">
                                                       <a href="#">
                                                           <img src={tag2}  />
                                                       </a>

                                                       <div className="content">
                                                           <a href="#">#color</a>
                                                           <div className="tag-hover">
                                                               <span className="count-item">1 items</span>
                                                           </div>
                                                       </div>
                                                      </div>
                                                  </div>

                                                 <div class='item'>
                                                      <div className="item-tag">
                                                       <a href="#">
                                                           <img src={tag3}  />
                                                       </a>

                                                       <div className="content">
                                                           <a href="#">#bedding</a>
                                                           <div className="tag-hover">
                                                               <span className="count-item">6 items</span>
                                                           </div>
                                                       </div>
                                                      </div>
                                                  </div>

                                                
                                                  
                                                </OwlCarousel>
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
}

export default Trending
