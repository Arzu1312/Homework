import React from 'react';
import '../sass/style.css';
import cat1 from '../images/cat-01.png';
import cat2 from '../images/cat-02.png';
import cat3 from '../images/cat-03.png';
import cat4 from '../images/cat-04.png';
import cat5 from '../images/cat-05.png';
import cat6 from '../images/cat-06.png';
import home1 from '../images/banner-home1-1.jpg';
import home2 from '../images/banner-home1-2.jpg';
import home3 from '../images/banner-home1-3.jpg';
import home4 from '../images/banner-home1-4.jpg';
import home5 from '../images/banner-home1-5.jpg';
import home6 from '../images/banner-home1-6.jpg';
import home7 from '../images/banner-home1-7.jpg';


const Category = () => {
    return (
        <div className="category">
            <section className="category-section">
                <div className="elementor-container">
                    <div className="elementor-column">
                        <div className="elementor-widget">
                            <div className="elementor-element">
                                <div className="elementor-widget-container">
                                    <div className="list-categories">
                                      <h3 className="heading-title">Shop by Category</h3>
                                      <div className="image-list">
                                          <div className="item-image">
                                              <div className="item-cat">
                                                  <a href="#" className="cat-image">
                                                      <img src={cat1}  />
                                                  </a>
                                                  <div className="content">
                                                      <a href="#" className="cat-name">Lighting</a>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="item-image">
                                              <div className="item-cat">
                                                  <a href="#" className="cat-image">
                                                      <img src={cat2}  />
                                                  </a>
                                                  <div className="content">
                                                      <a href="#" className="cat-name">Bedding</a>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="item-image">
                                              <div className="item-cat">
                                                  <a href="#" className="cat-image">
                                                      <img src={cat3}  />
                                                  </a>
                                                  <div className="content">
                                                      <a href="#" className="cat-name">Furniture</a>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="item-image">
                                              <div className="item-cat">
                                                  <a href="#" className="cat-image">
                                                      <img src={cat4}  />
                                                  </a>
                                                  <div className="content">
                                                      <a href="#" className="cat-name">Bathroom</a>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="item-image">
                                              <div className="item-cat">
                                                  <a href="#" className="cat-image">
                                                      <img src={cat5}   />
                                                  </a>
                                                  <div className="content">
                                                      <a href="#" className="cat-name">Rugs & Curtains</a>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="item-image">
                                              <div className="item-cat">
                                                  <a href="#" className="cat-image">
                                                      <img src={cat6}  />
                                                  </a>
                                                  <div className="content">
                                                      <a href="#" className="cat-name">Art And Decor</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                    </div>

                                       <div className="images-group">
                                           <div className="image-row">
                                               <div className="zoom-in">
                                                   <figure>
                                                       <img src={home1}  />
                                                   </figure>
                                               </div>
                                           </div>

                                           <div className="image-row">
                                               <div className="zoom-in">
                                                   <figure>
                                                       <img src={home2}  />
                                                   </figure>
                                               </div>
                                           </div>

                                           <div className="image-row">
                                               <div className="zoom-in">
                                                   <figure>
                                                       <img src={home3}  />
                                                   </figure>
                                               </div>
                                           </div>

                                           <div className="image-row">
                                               <div className="zoom-in">
                                                   <figure>
                                                       <img src={home4}  />
                                                   </figure>
                                               </div>
                                           </div>

                                           <div className="image-row">
                                               <div className="zoom-in">
                                                   <figure>
                                                       <img src={home5} width="280px" height="280px" />
                                                   </figure>
                                               </div>
                                           </div>

                                           <div className="image-row">
                                               <div className="zoom-in">
                                                   <figure>
                                                       <img src={home6}  />
                                                   </figure>
                                               </div>
                                           </div>

                                           <div className="image-row">
                                               <div className="zoom-in">
                                                   <figure>
                                                       <img src={home7}  />
                                                   </figure>
                                               </div>
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

export default Category
