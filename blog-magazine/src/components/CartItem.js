import React from 'react';
import { Link } from 'react-router-dom';
import 'react-router-dom';



const CartItem = (props) => {

    return (
        <div className="box col-lg-12 col-md-6 col-sm-3 ">
          <img className="photolar" src={props.img} alt="" />
            <p className="nickname">{props.title}  <span className="date">{props.span}</span></p> 
              <Link to="/Information" ><h2 className="title">{props.text}</h2></Link>
              <div className="like">
                <div className="reactions">
                  <div className="like1"><i class="fas fa-heart"></i><h6>{props.like}</h6></div>
                  <div className="comment"><i class="far fa-comment-alt"></i> <h6>{props.comment}</h6></div>
                </div>
                <div className="save"><i class="far fa-bookmark"></i></div>
              </div>
          </div> 
    )
}

export default CartItem