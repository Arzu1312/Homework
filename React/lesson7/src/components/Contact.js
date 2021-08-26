import React from 'react';
import '../style/style.css';
import contact from '../contact-illustration.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-group">
                    <div className="contact-title">
                        <h1>Get in touch</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi cumque commodi quibusdam pariatur officiis totam ad nemo magnam, voluptates illum nostrum tenetur facilis corporis eligendi nobis ab repudiandae cum explicabo.</p>
                   
                     <div className="contact-info">
                         <h1>Contact us</h1>
                         <div className="phone">Tel: 01482 602555</div>
                         <div className="mail">E-mail: question@kcom.com</div>
                         <div className="address">Address: 1355 Market St, Suite 900 San Francisco, CA 94103</div>
                     </div>
                    </div>

                    <div className="contact-image">
                       <img src={contact}  />
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

export default Contact
