import React from 'react';
import { useCart } from "react-use-cart";
import '../sass/style.css';

const Cartitem = (props) => {

    const {addItem} = useCart();


    return (
<div className="col-11 col-md-6 col-lg-4 mx-0 mb-4">
      <div className="card mb-3" style={{maxWidth: '550px'}}>
      <div className="row g-0">
        <div className="col-md-4">
        <img src={props.img} className="card-img-top"  />
        </div>
        <div className="col-md-8">
          <div className="card-body">
          <h5 className="card-title mt-4">{props.title}</h5>
           <h6 className="card-title text-danger ">{props.price} ₼</h6>
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-grad" onClick={()=>addItem(props.item)}>Əlavə et</button>
          </div>
        </div>
      </div>
    </div>
    </div>
      // <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4">
      //   <div className="card p-0 overflow-hidden">
      //   <img src={props.img} className="card-img-top"  />
      //   <div className="card-body ">
      //     <h5 className="card-title text-center">{props.title}</h5>
      //     <h6 className="card-title text-center">{props.price} ₼</h6>
      //     <p className="card-text text-center">{props.desc}</p>
      //     <button className="btn btn-primary" onClick={()=>addItem(props.item)}>Əlavə et</button>
      //   </div>
      // </div>
      // </div>
    )
}

export default Cartitem
