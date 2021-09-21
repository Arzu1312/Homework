import React from 'react';
import { useCart } from "react-use-cart";
import '../sass/style.css';


const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyItem,
        emptyCart,} = useCart();

        if (isEmpty) return <p className="text-center">Məlumat yoxdur.</p>;

    return (
        <selection className="py-4 container">
           <div className="col-auto ms-auto  w-100">
                    <h2 class="text-center text-white bg-primary bg-opacity-50 p-2">Ümumi məbləğ: {cartTotal}₼</h2>
                    <h5 class="text-center mt-3">Cart({ totalUniqueItems})totalItems: ({totalItems})</h5>
                    <table class="table mt-5 ">
                     <thead>
                       <tr>
                         <th scope="col">#</th>
                         <th scope="col">Image</th>
                         <th scope="col">Product</th>
                         <th scope="col">Price</th>
                         <th scope="col">Description</th>
                         <th scope="col">Quantity</th>
                         <th scope="col">Buttons</th>
                       


                       </tr>
                      </thead>
                      </table>
                
           </div>
           <div className="row justify-content-center">
                    <div className="col-12">
                      
                        <table className=" table table-hover m-0">
                            <tbody>
                                {items.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                        <td>
                                            <img src={item.img} style={{height: "6rem"}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.desc}</td>
                                        <td>Say:({item.quantity})</td>
                                        
                                         <td>
                                             <button className="btn btn-warning ms-3" onClick={()=>updateItemQuantity(item.id, item.quantity +1 )}>+</button>
                                             <button className="btn btn-warning ms-3 " onClick={()=>updateItemQuantity(item.id, item.quantity -1 )}>-</button>
                                             <button className="btn btn-danger ms-4" onClick={()=>removeItem(item.id)}>Məhsulu silin</button>
                                         </td>

                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
                        <button className="btn btn-primary m-2" onClick={()=>emptyCart()}>Silmək</button>
                        <button className="btn btn-success">Almaq</button>
                    </div>
                </div>
        </selection>
    )
}

export default Cart
