import React from 'react';
import Cartitem from './Cartitem';
import data from './data';
import '../sass/style.css';

const Home = () => {
    return (
        <>
            <h1 className="text-center text-white bg-primary bg-opacity-50 mt-3">Bütün Məhsullar</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                 {data.productData.map((item,index)=> {
                     return(
                         <Cartitem
                         img={item.img}
                         title={item.title}
                         desc={item.desc}
                         price={item.price}
                         item={item}
                         key={index}
                         />
                     )
                 })}
                </div>
            </section>
        </>
    )
}

export default Home
