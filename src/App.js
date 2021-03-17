import Cart from './Cart'
import './App.css';
import Navbar from './Navbar'
import React from 'react';


class App extends React.Component {


  constructor(){
    super()
    this.state = {
        products: [
            {
                item : 'phone',
                price: '999',
                quantity: 1,
                img: 'https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg',
                id: 1
            },

            {
                item : 'Watch',
                price: '500',
                quantity: 1,
                img: 'https://images-na.ssl-images-amazon.com/images/I/61dDSWwu%2BJL._UL1102_.jpg',
                id: 2
            },

            {
                item : 'computer',
                price: '10000',
                quantity: 1,
                img: 'https://images-na.ssl-images-amazon.com/images/I/816DJLTMWuL._SL1500_.jpg',
                id: 3
            }
        ]
    }
}
handleIncrease = (product) => {
    //  console.log('handle increase event', product);
    const {products} = this.state
    const index = products.indexOf(product)
    products[index].quantity += 1
    
    this.setState({
        products: products
    })
}

handleDecrease = (product) => {
    // console.log('clicked on decrease button', product);
    const {products} = this.state
    const index = products.indexOf(product)
    if(products[index].quantity > 0){
        products[index].quantity -= 1
    }

    this.setState({
        products
    })
}

removeProduct =  (product) => {
    const {products} = this.state
    const index = products.indexOf(product)
    // console.log('delete this product', product);
    products.splice(index, 1)
    this.setState({
        products
    })
}

getCartCount = () => {
    const {products} = this.state
    let CartCount = 0
    products.map((product) => {
        CartCount += product.quantity
    })
    return CartCount
}

getCartTotal = () => {
  const {products} = this.state
  let cartTotal = 0
  products.map((product) => {

    cartTotal += parseInt(product.price * product.quantity)
  })
  return cartTotal
}
  render(){
    const {products} = this.state
    return (
      <div className="App">
        <Navbar
          CartCount = {this.getCartCount()}
        />
        <Cart 
          handleIncreaseQuantity = {this.handleIncrease}
          handleDecreaseQuantity = {this.handleDecrease}
          removeProduct = {this.removeProduct}
          products = {products}
        />
        <div className='cart-total'><h1>TOTAL = {this.getCartTotal()}</h1></div>
      </div>
    );
  }
}

export default App;
