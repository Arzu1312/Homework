import React from 'react';
import '../sass/style.css';
import story1 from '../images/story1.png'

const Story = () => {
    return (
        <div className="story">
             <div className="container">
                <div className="story-section">
                    <div className="info-text">
                        <span className="txt">SUPPER CHANGE YOUR PLANNING POWERS</span>
                        <h2 className="title">Become an author and share your great stories</h2>
                        <span className="story-text">Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.</span>
                        
                     <button className="author-btn">Become an author</button>
                    </div>
                    <div className="story-img">
                      <div className="st-image">
                      <img src={story1} />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
