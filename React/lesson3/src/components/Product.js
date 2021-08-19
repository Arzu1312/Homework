import React from 'react';
import '../style/style.css';
import bar from '../images/pngwave.png';




class Product extends React.Component {
    
    render() {
        return (
            <div>
                <div className="screen -right">
                     <div className="app-bar">
                         <img src={bar} alt="bar" />
                     </div>
                     <div className="title">
                         <h1>Your cart</h1>
                     </div>
                     <div className="cart-items">
                        {
                            this.props.products.map(product => {
                               
                             return  <div className="cart-item" key={product.id}>
                             <div className="left">
                                 <div className="cart-image">
                                     <div className="image-wrapper" onClick={() => this.props.addProduct(product)}>
                                         <img src={product.image} alt={product.title}/>
                                     </div>
                                 </div>
                             </div>
                             <div className="right">
                                 <div className="name">{product.title}</div>
                                 <div className="price">${product.price}</div>
                                 <div className="count">
                                 <div className="button" onClick ={() => this.props.decrementCount(product.id)}> <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" viewBox="0 0 320 512">
                                         <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg> </div>
                                     <div className="number">{product.count}</div>
                                     <div className="button" onClick ={() => this.props.incrementCount(product.id)}> <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" viewBox="0 0 320 512">
                                         <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> </div>
                                    
                                 </div>
                             </div>
                         </div>
                            })
                        }
    
                         
                     </div>
    
                     
                </div>
            </div>
        )
    }
}

export default Product
