import React from 'react';
import Main from './Main';
import Category from './Category';
import Sell from './Sell';
import Trending from './Trending';
import Cartitem from './Carditem';
import data from './data';
import '../sass/style.css';

const Explore = () => {
    return (
        <div className="explore">
           <section className="explore-section">
            <div className="elementor-container">
                <div className="elementor-column">
                    <div className="elementor-widget">
                        <div className="elementor-element">
                            <div className="elementor-widget-container">
                                <div className="tbay-element">
                                    <h3 className="heading-title">
                                        <span className="title">Explore Best Selling</span>
                                        <span className="subtitle">Offer up to 50%</span>
                                    </h3>
                                 <div className="products ">
                                {data.productData.map((item,index)=> {
                                       return(
                                           <Cartitem
                                           img={item.img}
                                           title={item.title}
                                           desc={item.desc}
                                           price={item.price}
                                           item={item}
                                           key={index}
                                           />
                                       )
                                   })}
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

const Common=()=> {
    return(
      <div>
       <Main/>
      <Category/>
      <Sell/>
      <Explore/>
      <Trending/>
      </div>
    )
}

export default Common
