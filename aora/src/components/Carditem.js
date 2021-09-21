import React from 'react';
import { useCart } from 'react-use-cart'

const Carditem = (props) => {

   const {addItem} =useCart();

    return (
        
                <div className="card">
                   <div className="img-box">
                   <img  src={props.img} className="card-img-top" width="300px" height="300px" alt="err" />
                  
                   </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <h6 className="card-title">${props.price}</h6>
                       
                        <button className="btn" style={{backgroundColor:"#fcb800", color:"#fff",boxShadow:"none"}} onClick={()=>addItem(props.item)}>Add To Cart</button>
                    </div>
                </div>
           
    )
}

export default Carditem
