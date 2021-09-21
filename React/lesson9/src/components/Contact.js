import React from 'react';
import '../style/style.css';
import ilustration from '../images/Illustration.png';
import map from '../images/Map.png'

function Contact() {
    return (
       <>

       <div className="contact">
           
                <div className="container">
                <div className="contact-section">
                   <div className="contact-left">
                        <div className="contact-info">
                            <img src={ilustration} className="ilustration" />
                            <h4>REQUEST A CALLBACK</h4>
                            <h3>We will contact in the shortest time.</h3>
                            <h5>Monday to Friday, 9am-5pm.</h5>
                        </div>

                        <div className="contact-input">
                            <form>
                                <input type="text" placeholder="Name" className="name" /> <br />
                                <input type="email" placeholder="Email" className="email" /> <br />
                                <textarea  className="message" placeholder="Message" cols="50" rows="10"></textarea> <br />
                                <button class="button-71" role="button">Send Message</button>
                            </form>
                        </div>
                   </div>

                   <div className="contact-right">
                       <img src= {map} className="map" />

                       <button class="button-75" role="button"><span class="text">Call us to delivery  123-456789</span></button>
                   </div>
           </div>
         </div>
       </div>

       <div className="bottom-contact">
           <div className="container">
            <div className="btm-contact">
            <div className="bottom-left">
              <a className="navbar-brand" href="#">Space</a>
              <div className="bottom-text">
                  <h1>Get an update every week</h1>
                  <p>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
              </div>
              </div>

              <div className="bottom-right">
                  <h3>SUBSCRIBE TO NEWSLETTER</h3>
                  <input type="email" className="mail" placeholder="Enter your mail" />
                  <button class="pulse">Subscribe</button>
                  
              </div>
            </div>
           </div>
       </div>
       </>
    )
}

export default Contact
