import React from 'react';
import '../sass/style.css';
import img1 from '../images/avatar_1.jpg';
import img2 from '../images/avatar_2.jpg';
import img3 from '../images/avatar_3.jpg';
import img4 from '../images/avatar_4.jpg';
import img5 from '../images/avatar_5.jpg';
import img6 from '../images/avatar_6.jpg';


function Topseller() {
    return (
        <div className="topSeller">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="intro m-0">
                            <div className="intro-content">
                                <span className="storm">CREATIVE ARTIST</span>
                                <h3 className="mt-3 mb-0">Top Sellers</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row items">
                    <div className="col-12 col-sm-6 col-lg-4 item">
                        <div className="card">
                            <div className="single-seller">
                                <a href="#">
                                    <img src={img1} className="avatar" />
                                </a>

                                <div className="seller-info ml-3">
                                    <a href="#" className="seller mb-2">@Richard</a>
                                    <span>1.5 BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 item">
                    <div className="card">
                            <div className="single-seller">
                                <a href="#">
                                    <img src={img2} className="avatar" />
                                </a>

                                <div className="seller-info ml-3">
                                    <a href="#" className="seller mb-2">@JohnDeo</a>
                                    <span>2.3 BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 item">
                    <div className="card">
                            <div className="single-seller">
                                <a href="#">
                                    <img src={img3} className="avatar" />
                                </a>

                                <div className="seller-info ml-3">
                                    <a href="#" className="seller mb-2">@Junaid</a>
                                    <span>2.5 BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 item">
                    <div className="card ">
                            <div className="single-seller">
                                <a href="#">
                                    <img src={img4} className="avatar" />
                                </a>

                                <div className="seller-info ml-3">
                                    <a href="#" className="seller mb-2">@Yasmin</a>
                                    <span>1.9 BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 item">
                    <div className="card">
                            <div className="single-seller">
                                <a href="#">
                                    <img src={img5} className="avatar" />
                                </a>

                                <div className="seller-info ml-3">
                                    <a href="#" className="seller mb-2">@ArhamH</a>
                                    <span>3.2 BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 item">
                    <div className="card">
                            <div className="single-seller">
                                <a href="#">
                                    <img src={img6} className="avatar" />
                                </a>

                                <div className="seller-info ml-3">
                                    <a href="#" className="seller mb-2">@Sara</a>
                                    <span>4.7 BNB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topseller
