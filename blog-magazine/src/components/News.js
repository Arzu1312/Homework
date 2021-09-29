import React from 'react';
import news1 from '../images/news1.png';

const News = () => {
    return (
        <div className="news">
            <div className="container">
                <div className="news-section">
                    <div className="newsletter">
                        <h2 className="title">Join our newsletter 🎉</h2>
                        <span className="news-text">Read and share new perspectives on just about any topic. Everyone’s welcome.</span>
                        <ul className="news-list">
                            <li>
                                <span className="count" style={{backgroundColor:"rgb(219,234,254)", color:"rgb(30,64,175)"}}>01</span>
                                <span className="text">Get more discount</span>
                            </li>

                            <li className="magazine">
                                <span className="count">02</span>
                                <span className="text">Get premium magazines</span>
                            </li>
                        </ul>

                        <form className="news-form">
                            <input type="email" className="mail" placeholder="Enter your mail" />
                            <button className="btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                            </button>
                        </form>
                    </div>
                    <div className="news-img">
                      <div className="nc-image">
                      <img src={news1} />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
