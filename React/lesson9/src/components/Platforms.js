import React from 'react';
import '../style/style.css';
import star1 from '../images/Star 2.png';
import image2 from '../images/image2.png';



function Platforms() {
    return (
       <div className="platform">
           <div className="container">
               <div className="platform-group">
                   <div className="platform-title">
                  <h1 className="neon">We deliver your products <br /> safely to your home in a reasonable time.</h1>
                   <p className="text-effect">A trusted provider of courier services.</p>
                   <div className="violet-box"></div>
                   
                   </div>

                   <div className="star">
                   <img src={star1} className="star"  />
                 

               </div>
               </div>

               <div className="platform-section">
                     <div className="section-title">
                         <p className="blue-effect">
                         DESIGN SYSTEM STARTER
                         </p>
                         <img src={image2} className="image2" />
                     </div>

                     <div className="section-box">
                         <div className="plabox-blue"></div>
                         <div className="plabox-violet"></div>
                         <button className="address"> <button class="custom-btn btn-11">Start Now</button> 
                         We are here to Help You..
                      </button>
                     </div>
               </div>
           </div>
       </div>
    )
}

export default Platforms
