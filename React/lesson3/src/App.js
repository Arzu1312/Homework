import React from 'react';
import './style/style.css';
import Item from './components/Item';
import Product from './components/Product';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png'

class App extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {

      products: [
        {
          id: 1,
          title:"Nike Air Zoom Pegasus 36",
          price: 108.97,
          count: 1,
          image: img1,
          description: "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds."
        },

        {
          id: 2,
          title:"Nike Air Zoom Pegasus 36 Shield",
          price: 89.97,
          count: 1,
          image: img2,
          description: "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds."
        },

        {
          id: 3,
          title:"Nike CruzrOne",
          price: 100.97,
          count: 1,
          image: img3,
          description: "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds."
        }
      ],
      selectedProduct: {}
    }
    

   
  }


 addProduct = (product) =>  {
  
    this.setState({selectedProduct:product})
 } 

 incrementCount = (id) => {

   let newProducts = this.state.products
    newProducts.map(product => {
      if (id === product.id) {
        product.count ++;
      }
    })
   this.setState({products:newProducts}) 
  // console.log(newProducts)
 }
 decrementCount = (id) => {
  let newProducts = this.state.products
  newProducts.map(product => {
    if (id === product.id && product.count > 1) {
      product.count --;
    }
  })
  this.setState({products:newProducts}) 
 }
  render() {
    return (
      <div className="wrapper">
            <Item selectedProduct={this.state.selectedProduct}></Item>
            <Product products={this.state.products} addProduct={this.addProduct} incrementCount={this.incrementCount} decrementCount={this.decrementCount}></Product>
      </div>
   )
  }
}

export default App;
