import React from 'react';
import '../sass/style.css';
import home1 from '../images/home1.jpeg'

const Main = () => {
    return (
        <div className="main">
            <div className="main-container">
                <div className="element"></div>
                <img src={home1} className="home-img" />
            </div>
            <div className="container">
                <div className="main-text">
                    <h1 className="title">The hidden world of whale culture</h1>
                    <p className="text">From singing competitions to food preferences, scientists are learning whales have cultural differences once thought to be unique to humans.</p>
                 <div className="button-group">
                     <a href="#" className="read">Read more</a>
                     <a href="#" className="play">Play video 
                     <i class="far fa-play-circle"></i>
                     </a>
                 </div>
             </div>
            </div>
        </div>
    )
}

export default Main
