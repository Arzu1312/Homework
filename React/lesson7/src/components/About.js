import React from 'react';
import '../style/style.css';
import lamp from '../lamp.png';
import cat from '../cat.png';
import girl from '../girl.png';
import flower from '../flower.png';
import sky from '../Skyline.png';
import sun from '../sun.png'




const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-group">
                    <div className="left">
                      <div className="about-image">
                      <img src={lamp} className="lamp" />
                     
                      </div>
                      <div className="text-image">
                      <h1>We create digital products as your solution</h1>
                       <img src={cat} className="cat" />
                      </div>
                    </div>

                    <div className="about-center">
                        
                        <img src={girl} className="girl" />
                    </div>

                    <div className="design">
                        <h1>Design+Code</h1>
                        <h2>Design System</h2>
                        <img src={flower} className="flower" />
                    </div>
                </div>

                <div className="about-box">
                      
                      <div className="about-title">
                          <div className="brand">
                          <h1>2021 Website and Branding</h1>
                          </div>

                          <div className="sun">
                              <img src={sun}  />
                          </div>
                      </div>
                      <div className="sky-image">
                          <img src={sky} />
                      </div>
                </div>
            </div>
            <div className="footer">
            <div className="container">
                <div className="group">
                <div className="info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                    </div>
               

                <div className="service-box">
                    <h3>Service</h3>
                    <ul>
                        <li><a href="#">Domain</a></li>
                        <li><a href="#">Shared Hosting</a></li>
                        <li><a href="#">Cloud Hosting</a></li>
                        <li><a href="#">Private Hosting</a></li>
                    </ul>
                </div>

                <div className="hosting">
                    <h3>Hosting</h3>
                    <ul>
                        <li><a href="#">Cheap Hosting</a></li>
                        <li><a href="#">Hosting Wordpress</a></li>
                        <li><a href="#">Email Hosting</a></li>
                        <li><a href="#">Hosting Unlimited</a></li>
                    </ul>
                </div>

                <div className="company">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="help">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Support</a></li>
                    </ul>
                </div>
                </div>

                <div className="copyright">
                    <p> <span>Built by Jeremiah</span> with love in Lagos. Copyright 2021</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About
