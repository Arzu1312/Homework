import React from 'react';
import '../style/style.css';
import client1 from '../images/client1.png';
import client2 from '../images/client2.png';
import client3 from '../images/client3.png';



function Team() {
    return (
        <div className="team">
            <div className="container">
                <div className="team-title">
                    <h1>TESTIMONIAL</h1>
                    <p>Our Awesome Clients</p>
                </div>

                <div className="team-group">
                <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
         <p className="team-text"> I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick & dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
            <div className="card-body">
                <img src={client1} className="client" />
              <h5 className="card-title">Yves Tanguy</h5>
              <p className="card-text">Chief Executive, DLF</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <p className="team-text">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
            <div className="card-body">
            <img src={client2} className="client" />
              <h5 className="card-title">Yves Tanguy</h5>
              <p className="card-text">Chief Executive, DLF</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <p className="text">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended.</p>
            <div className="card-body">
            <img src={client3} className="client" />
              <h5 className="card-title">Yves Tanguy</h5>
              <p className="card-text">Chief Executive, DLF</p>
            </div>
          </div>
        </div>
        
      </div>
                </div>
            </div>
        </div>
    )
}

export default Team
