import React from 'react';
import '../style/style.css';
import Item from '../components/Item'

function Main() {
    return (
        <div className="container">
            <div className="item-group">
            <div className="item">
            <div className="text">
                <h1>Universe</h1>
                <h2>Research center</h2>
                <h3>A vacation is something you want to make sure you’re paying for exactly what you get, and that means booking through a website you trust.</h3>
                 <button className="buton">LET'S GO !</button>
           </div>
                  
                  <div className="buton-group">
                      <buton className="buton-left">Create Account</buton>
                      <buton className="buton-right">How it works ?</buton>

                  </div>
            </div>

            <Item></Item>
            </div>
        </div>
    )
}

export default Main
