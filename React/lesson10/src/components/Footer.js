import React from 'react';
import '../sass/style.css';
import logo from '../images/logo.png'


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3 res-margin">
                        <div className="footer-items">
                        <a className="navbar-brand" href="#"><img src={logo} /></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                        <div className="social-icons">
                         <a href="#" className="facebook">
                         <i class="fab fa-facebook-f"></i>
                         </a>

                         <a href="#" className="twitter">
                         <i class="fab fa-twitter"></i>
                         </a>

                         <a href="#" className="google-plus">
                         <i class="fab fa-google-plus-g"></i>
                         </a>

                         <a href="#" className="vine">
                         <i class="fab fa-vine"></i>
                         </a>
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 res-margin">
                        <div className="footer-items">
                            <h4 className="footer-title">Useful Links</h4>
                            <ul>
                                <li><a href="#">All NFTs</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Create</a></li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Privacy & Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 res-margin">
                        <div className="footer-items">
                            <h4 className="footer-title">Community</h4>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Suggestions</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="footer-items">
                            <h4 className="footer-title">Subscribe Us</h4>

                            <div className="subscribe-form">
                                <input type="email" className="form-control" placeholder="info@yourmail.com" />
                                <button type="submit" className="btn">
                                <i class="far fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
