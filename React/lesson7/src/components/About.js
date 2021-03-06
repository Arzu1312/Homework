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
            
        </div>
    )
}

export default About
