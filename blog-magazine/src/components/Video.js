import React, { Component } from 'react';
import '../sass/style.css';
import video1 from '../images/video1.jfif';
import video2 from '../images/video2.jfif';
import video3 from '../images/video3.jfif';
import video4 from '../images/video4.jfif';
import video5 from '../images/video5.jfif';



class Video extends Component {
 
    state = {
        products: [
           
          {

            "id" : "1",
            "src": [
                video1,
                video2,
                video3,
                video4,
                video5

            ],
          }
        ],

        index: 0
    };

    handleTab = index => {
        this.setState({index: index})
    }

    render() {

        const {products, index} = this.state;
        

        return (
        <div className="video">
         <div className="container">
             <div className="video-section">
              <div className="video-title">
                <div className="heading">
                    <h2 className="title">🎬 The Videos</h2>
                    <span className="subtitle">Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.</span>
                </div>
              </div>

              {
                      products.map(item =>(
                    <div className="image-box" key={item.id}>
                        <div className="right-background"></div>
                 
                            <div className="video-img">
                        <div className="group-box">
                            <div className="play-btn">
                                <div className="play-icon">
                                    <div className="icon">
                                        <span>
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
  
                           
                            <img src={item.src[index]} className="image" />
                                  
                           
                        </div>
                    </div>
  
                    <div className="image-group">
                    {
                        item.src.map((img,index) => (
                        <div className="image-detail">
                          
                                <div className="play-icon2">
                                    <span>
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path></svg>
                                    </span>
                                </div>
                           
  
                            <div className="thumb">
                                    <div className="zoom-in">
                                    <figure>
                                    <img src={img} className="side-img" key={index} onClick={() => this.handleTab(index)}/>
                                    </figure>
                                </div>
                                
                            </div>
                        </div> 
                          ))
                        }                    
                    </div>                   
                </div>
              ))
            }
             </div>
         </div>
        </div>
        )
    }
}

export default Video
