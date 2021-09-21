import React from 'react';
import '../style/style.css';
import image3 from '../images/image3.png'



const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter=> {
    const updCount =() => {
        const target = counter.getAttribute('data-target');
        const count = +counter.innerText;

        const score = target / speed;

        if(count < target) {
            counter.innerText = count + score;
            setTimeout(updCount, 5);
        } else {
            counter.innerText = target;
        }

    }

    updCount();
})




function Services() {
    return (
        <div className="service">
        <div className="container">
            <div className="service-group">
                <div className="service-items">
                    <div className="service-item">
                        <div className="service-icon">
                        <i class="fas fa-trophy"></i>
                        </div>

                        <div className="counter" data-target="2600">0</div>
                         <h3>Awards  won</h3>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">
                        <i class="far fa-map"></i>
                        </div>

                        <div className="counter" data-target="6500">0</div>
                         <h3>States covered</h3>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">
                        <i class="fas fa-user-tie"></i>
                        </div>

                        <div className="counter" data-target="689000">0</div>
                         <h3>Happy clients</h3>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">
                        <i class="fas fa-truck"></i>
                        </div>

                        <div className="counter" data-target="1300000">0</div>
                         <h3>Goods delivered</h3>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">
                        <i class="fas fa-briefcase"></i>
                        </div>

                        <div className="counter" data-target="1300000">0</div>
                         <h3>Business hours</h3>
                    </div>
                </div>
            </div>

            <div className="service-section">
                <div className="service-left">
                <div className="service-title">
                <h1 data-text="Services"><span>Services</span></h1>
                <p>Our services for you</p>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
          <i class="fas fa-briefcase"></i>
            <div className="card-body">
            <h5 className="card-title">Business Services</h5>
            <p className="card-text">We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
            <ul>
                <li>Corporate goods</li>
                <li>Shipment</li>
                <li>Accesories</li>
            </ul>

            <button className="button-33" role="button">Learn more</button>
           
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <i class="fas fa-store"></i>
            <div className="card-body">
            <h5 className="card-title">Statewide Services</h5>
            <p className="card-text">Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
           
           <ul>
               <li>Personal items</li>
               <li>Percels</li>
               <li>Documents</li>
           </ul>

           <button className="button-33" role="button">Learn more</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <i class="fas fa-shopping-bag"></i>
            <div className="card-body">
            <h5 className="card-title">Personal Services</h5>
            <p className="card-text">You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
           
           <ul>
               <li>Gifts</li>
               <li>Package</li>
               <li>Documents</li>
           </ul>
            <button className="button-33" role="button">Learn more</button>
            </div>
          </div>
        </div>
        
      </div>

                </div>
               <div className="service-right">
                  <img src={image3} className="image3" /> 
               </div>
            </div>
        </div>
    </div>
    )
}

export default Services
