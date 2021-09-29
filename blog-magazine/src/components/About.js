import React from 'react'
import Main from './Main';
import News from './News';
import Video from './Video';
import Story from './Story';
import Contact from './Contact';
import data from './data';
import CartItem from './CartItem';



const About = () => {
   
    return (
        <div className="about">
            <div className="container">
                <div className="about-section">
                    <div className="about-title">
                        <div className="heading">
                        <h2 className="title">Explore other latest articles</h2>
                    <span className="subtitle">Explore 1129 other articles</span>
                        </div>
                    </div>
                    <div className="itemsler col-lg-12 col-md-6 col-sm-3 ">
            {data.productData.map((item,index)=>{
        return(
            <CartItem
            img={item.img}
            title={item.title}
            text={item.text}
            span={item.span}
            like={item.like}
            comment={item.comment}
            item={item}
            key={index}
            />
        )
    })}
        </div>
                </div>
            </div>
        </div>
          
    )
}



const Common = () => {

    return (
         <div>
           
             <Main/>
             <News/>
             <Video/>
             <About/>
             <Story/>
             <Contact/>
             
         </div>
    )
}

export default Common;