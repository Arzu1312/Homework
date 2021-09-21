import React from 'react';
import '../sass/style.css';
import auction1 from '../images/auction_1.jpg';
import auction2 from '../images/auction_2.jpg';
import auction3 from '../images/auction_3.jpg';
import auction4 from '../images/auction_4.jpg';


function Asset() {
    return (
        <div className="asset">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <div className="intro m-0">
                            <div className="intro-content">
                                <span className="storm">EXCLUSIVE ASSETS</span>
                                <h3 className="mt-3 mb-0">Explore</h3>
                            </div>
                            <div className="intro-btn">
                                <a href="#" className="content-btn">View All </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row items">
                <div className="col-12 col-sm-6 col-lg-3 item">
                    <div className="card exclusive">
                        <div className="image-over">
                            <a href="#">
                                <img src={auction1} className="auction card-img-top" />
                            </a>
                        </div>

                        <div className="card-caption col-12 p-0">
                            <div className="card-body" style={{"textAlign":"left"}}>
                                <a href="#">
                                    <h5 className="mb-0">Walking On Air</h5>
                                </a>

                                <div className="asset-seller">
                                    <span>Owned By</span>
                                    <a href="#">
                                        <h6 className="ml-2 mb-0">Richard</h6>
                                    </a>
                                </div>

                                <div className="card-bottom">
                                  <span>1.5 ETH</span>
                                  <span>1 of 1</span>
                                </div>

                                <a href="#" className="btn place">
                                <i class="fas fa-shopping-bag"></i>
                                Place a Bid
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 item">
                    <div className="card exclusive">
                        <div className="image-over">
                            <a href="#">
                                <img src={auction2} className="auction card-img-top" />
                            </a>
                        </div>

                        <div className="card-caption col-12 p-0">
                            <div className="card-body" style={{"textAlign":"left"}}>
                                <a href="#">
                                    <h5 className="mb-0">Domain Names</h5>
                                </a>

                                <div className="asset-seller">
                                    <span>Owned By</span>
                                    <a href="#">
                                        <h6 className="ml-2 mb-0">John Deo</h6>
                                    </a>
                                </div>

                                <div className="card-bottom">
                                  <span>2.7 ETH</span>
                                  <span>1 of 1</span>
                                </div>

                                <a href="#" className="btn place">
                                <i class="fas fa-shopping-bag"></i>
                                Place a Bid
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 item">
                    <div className="card exclusive">
                        <div className="image-over">
                            <a href="#">
                                <img src={auction3} className=" auction card-img-top" />
                            </a>
                        </div>

                        <div className="card-caption col-12 p-0">
                            <div className="card-body" style={{"textAlign":"left"}}>
                                <a href="#">
                                    <h5 className="mb-0">Trading Cards</h5>
                                </a>

                                <div className="asset-seller">
                                    <span>Owned By</span>
                                    <a href="#">
                                        <h6 className="ml-2 mb-0">Arham</h6>
                                    </a>
                                </div>

                                <div className="card-bottom">
                                  <span>2.3 ETH</span>
                                  <span>1 of 1</span>
                                </div>

                                <a href="#" className="btn place">
                                <i class="fas fa-shopping-bag"></i>
                                Place a Bid
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 item">
                    <div className="card exclusive">
                        <div className="image-over">
                            <a href="#">
                                <img src={auction4} className=" auction card-img-top" />
                            </a>
                        </div>

                        <div className="card-caption col-12 p-0">
                            <div className="card-body" style={{"textAlign":"left"}}>
                                <a href="#">
                                    <h5 className="mb-0">Industrial Revolution</h5>
                                </a>

                                <div className="asset-seller">
                                    <span>Owned By </span>  <a href="#">
                                          <h6 className="ml-2 mb-0"> Yasmin</h6>
                                    </a>
                                </div>

                                <div className="card-bottom">
                                  <span>1.8 ETH</span>
                                  <span>1 of 1</span>
                                </div>

                                <a href="#" className="btn place">
                                <i class="fas fa-shopping-bag"></i>
                                Place a Bid
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row" >
                <div className="col-12">
                   <div className="load">
                   <a href="#" className="btn load-btn" >Load More</a>
                   </div>
                </div>
            </div>
         </div>
         
        </div>
    )
}

export default Asset
