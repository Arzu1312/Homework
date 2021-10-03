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

            
        </div>
    )
}

export default Contact
