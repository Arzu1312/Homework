import React from 'react';
import '../style/style.css';
import looper from '../images/LooperGroup.png';
import img1 from '../images/Rectangle 1.png';
import img2 from '../images/Rectangle 25.png';
import img3 from '../images/Rectangle 26.png';
import img4 from '../images/Rectangle 27.png';
import img5 from '../images/image1.png';


function About() {
    return (
        <div className="about">
           <div className="container">
               <div className="about-group">
                   <div className="left-side">
                       <div className="purple"></div>
                        <div className="about-image">
                            <img src={looper} className="looper" />
                        </div>
                        <div className="violet"></div>
                   </div>

                   <div className="right-side">
                      <div className="about-text">
                           <h1>Choose Career & Start Your Project Now</h1>
                       </div>
                      
                      <button className="address"> Email Address
                      <button className="start">Get Started</button>
                  </button>

                  <div className="dark-purple"></div>
                   </div>
     
               </div>

               <div className="about-box">
                   <div className="left-box">
                       <div className="box-item">
                       <div class="box box1 shadow1">
                         
                           <h3>
                           <div className="icon-item">
                           <i class="fas fa-inbox"></i>
                           </div>
                               Programming Languages</h3>
                           <p>Choosing a programming 
                              language for a project is 
                              different  than choosing one 
                              to learn. Ceratain languages 
                              are chosen as the 
                              industry standard</p>

                              <button className="read">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  Read
                                  </button>
                         </div>
                         <div class="box box2 shadow2">
                            
                           <h3>
                           <div className="icon-item">
                             <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 128 128"><g><path d="M121.5,48.79a1.75,1.75,0,0,0,0-3.5h-7.1V31.83h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V15.35a1.75,1.75,0,0,0-1.75-1.75H99.67V6.5a1.75,1.75,0,0,0-3.5,0v7.1H82.71V6.5a1.75,1.75,0,0,0-3.5,0v7.1H65.75V6.5a1.75,1.75,0,0,0-3.5,0v7.1H48.79V6.5a1.75,1.75,0,0,0-3.5,0v7.1H31.83V6.5a1.75,1.75,0,0,0-3.5,0v7.1H15.35a1.75,1.75,0,0,0-1.75,1.75V28.33H6.5a1.75,1.75,0,0,0,0,3.5h7.1V45.29H6.5a1.75,1.75,0,0,0,0,3.5h7.1V62.25H6.5a1.75,1.75,0,0,0,0,3.5h7.1V79.21H6.5a1.75,1.75,0,0,0,0,3.5h7.1V96.17H6.5a1.75,1.75,0,0,0,0,3.5h7.1v12.98a1.75,1.75,0,0,0,1.75,1.75H28.33v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H45.29v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H62.25v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H79.21v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H96.17v7.1a1.75,1.75,0,0,0,3.5,0v-7.1h12.98a1.75,1.75,0,0,0,1.75-1.75V99.67h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V82.71h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V65.75h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V48.79ZM110.9,110.9H17.1V17.1h93.8Z"/><path d="M103.654,22.6H24.346a1.75,1.75,0,0,0-1.75,1.75v79.308a1.75,1.75,0,0,0,1.75,1.75h79.308a1.75,1.75,0,0,0,1.75-1.75V24.346A1.75,1.75,0,0,0,103.654,22.6ZM101.9,101.9H26.1V26.1H101.9Z"/><path d="M46.346,83.4H81.654a1.75,1.75,0,0,0,1.75-1.75V46.346a1.75,1.75,0,0,0-1.75-1.75H46.346a1.75,1.75,0,0,0-1.75,1.75V81.654A1.75,1.75,0,0,0,46.346,83.4ZM48.1,48.1H79.9V79.9H48.1Z"/></g></svg>
                             </div>
                               Jobs & Skills required</h3>
                           <p>Having a degree is vital for 
                            job opportunities, but you need to have a good resume that showcases your skills in programming, problem solving etc.</p>
                           <button className="read">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  Read
                                  </button>
                         </div>
                     </div>

                       <div class="box box3 shadow3">
                           <h3>
                               <div className="icon-item">
                               <i class="fas fa-database"></i>
                               </div>
                               Free Projects and Tutorials</h3>
                           <p>Join today to get access to 
                            Data Science, AI, ML, free courses which helps you to get placed in a better company with top job description</p>
                           <button className="read">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  Read
                                  </button>
                         </div>
                   </div>
                    <div className="right-box">
                        <div className="image-group">
                            <img src={img1} className="img1" />
                            <img src={img2} className="img2" />
                            <img src={img3} className="img3" />
                            <img src={img4} className="img4" />


                        </div>
                    </div>  
               </div>
               
               <div className="about-section">
              
                   <div className="left-content">
                   <div className="image-1">
                           <img src={img5} className="image1" />
                        </div>
                   </div>

                    <div className="right-content">
                    <div className="box-item">
                       <div class="box box1 shadow1">
                         
                           <h3>
                           <div className="icon-item">
                           <i class="fas fa-inbox"></i>
                           </div>
                               Programming Languages</h3>

                               <div className="read-btn">
                             <a href="#" className="bn5">Read</a>
                             </div>
                         </div>
                         <div class="box box2 shadow2">
                            
                           <h3>
                           <div className="icon-item">
                             <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 128 128"><g><path d="M121.5,48.79a1.75,1.75,0,0,0,0-3.5h-7.1V31.83h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V15.35a1.75,1.75,0,0,0-1.75-1.75H99.67V6.5a1.75,1.75,0,0,0-3.5,0v7.1H82.71V6.5a1.75,1.75,0,0,0-3.5,0v7.1H65.75V6.5a1.75,1.75,0,0,0-3.5,0v7.1H48.79V6.5a1.75,1.75,0,0,0-3.5,0v7.1H31.83V6.5a1.75,1.75,0,0,0-3.5,0v7.1H15.35a1.75,1.75,0,0,0-1.75,1.75V28.33H6.5a1.75,1.75,0,0,0,0,3.5h7.1V45.29H6.5a1.75,1.75,0,0,0,0,3.5h7.1V62.25H6.5a1.75,1.75,0,0,0,0,3.5h7.1V79.21H6.5a1.75,1.75,0,0,0,0,3.5h7.1V96.17H6.5a1.75,1.75,0,0,0,0,3.5h7.1v12.98a1.75,1.75,0,0,0,1.75,1.75H28.33v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H45.29v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H62.25v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H79.21v7.1a1.75,1.75,0,0,0,3.5,0v-7.1H96.17v7.1a1.75,1.75,0,0,0,3.5,0v-7.1h12.98a1.75,1.75,0,0,0,1.75-1.75V99.67h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V82.71h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V65.75h7.1a1.75,1.75,0,0,0,0-3.5h-7.1V48.79ZM110.9,110.9H17.1V17.1h93.8Z"/><path d="M103.654,22.6H24.346a1.75,1.75,0,0,0-1.75,1.75v79.308a1.75,1.75,0,0,0,1.75,1.75h79.308a1.75,1.75,0,0,0,1.75-1.75V24.346A1.75,1.75,0,0,0,103.654,22.6ZM101.9,101.9H26.1V26.1H101.9Z"/><path d="M46.346,83.4H81.654a1.75,1.75,0,0,0,1.75-1.75V46.346a1.75,1.75,0,0,0-1.75-1.75H46.346a1.75,1.75,0,0,0-1.75,1.75V81.654A1.75,1.75,0,0,0,46.346,83.4ZM48.1,48.1H79.9V79.9H48.1Z"/></g></svg>
                             </div>
                               Jobs & Skills required</h3>
                           
                               <div className="read-btn">
                             <a href="#" className="bn5">Read</a>
                             </div>
                         </div>
                     </div>

                       <div class="box box3 shadow3">
                           <h3>
                               <div className="icon-item">
                               <i class="fas fa-database"></i>
                               </div>
                               Free Projects and Tutorials</h3>
                           
                             <div className="read-btn">
                             <a href="#" className="bn5">Read</a>
                             </div>
                         </div>
                      
                        </div>  

               </div>   
           </div>
        </div>
    )
}

export default About
