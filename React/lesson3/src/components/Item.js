import React from 'react';
import '../style/style.css';
import bar from '../images/pngwave.png';


class Item extends React.Component {

    render() {

        return (
            <div>
                <div className="screen -left">
                    <div className="app-bar">
                       <img src={bar} alt="bar" />
                    </div>
                    <div className="title">
                        <h1>Picked items</h1>
                        </div>
    
                    <div className="shop-item">
                        <div className="item">
                            <div className="item-block">
                                <div className="image-area">
                                    <img src={this.props.selectedProduct.image} alt={this.props.selectedProduct.title} />
                                </div>
                                <div className="name">
                                    {this.props.selectedProduct.title}
                                </div>
    
                                <div className="description">
                                {this.props.selectedProduct.description}     
                                </div>
    
                                <div className="bottom-area">
                                    <div className="price">$ {this.props.selectedProduct.price}</div>
                                    <div className="cart-button">
                                        <p>ADD TO CART</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Item
