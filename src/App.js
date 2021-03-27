import Cart from './Cart';
import './App.css';
import Navbar from './Navbar';
import React from 'react';
import firebase from 'firebase';

class App extends React.Component {


  constructor(){
    super()
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore()
    console.log('constructor called');
}

//we will be using componentdidmount lifecylce to fetch data from database
componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);
  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //     })

  //     //fetch products from docs
  //     const products = snapshot.docs.map((doc) => {
  //       // console.log(typeof(doc.data()))
  //       let data = doc.data()
  //       data['id'] = doc.id
  //       return data
  //     })
  //     this.setState({
  //       products,
  //       loading: false
  //     })
  //     // console.log(products);
  //   })

  firebase
    .firestore()
    .collection('products')
    .orderBy('price')
    .onSnapshot((snapshot) => {
          // console.log(snapshot);
          console.log('onSnapshot called');
          snapshot.docs.map((doc) => {
            // console.log(doc.data());
          })
    
          //fetch products from docs
          const products = snapshot.docs.map((doc) => {
            // console.log(typeof(doc.data()))
            let data = doc.data()
            data['id'] = doc.id
            return data
          })
          this.setState({
            products,
            loading: false
          })
        })
        console.log('componentDidMount called');
}


handleIncrease = (product) => {
    //  console.log('handle increase event', product);
    const {products} = this.state
    const index = products.indexOf(product)
    // products[index].quantity += 1
    
    // this.setState({
    //     products: products
    // })
    const docRef = firebase.firestore().collection('products').doc(products[index].id)
    // console.log(docRef);
    docRef
      .update({
        quantity: products[index].quantity + 1
      })
      .then(()=>{
        console.log('increased successfully');
      })
      .catch((error)=>{
        console.log('error in increasing', error);
      })
}

handleDecrease = (product) => {
    // console.log('clicked on decrease button', product);
    const {products} = this.state
    const index = products.indexOf(product)
    if(products[index].quantity <= 0){
        return;
    }

    // this.setState({
    //     products
    // })

    const docRef = firebase.firestore().collection('products').doc(products[index].id)
    // console.log(docRef);
    docRef
      .update({
        quantity: products[index].quantity - 1
      })
      .then(()=>{
        console.log('decreased successfully');
      })
      .catch((error)=>{
        console.log('error in decreasing', error);
      })
}

removeProduct =  (product) => {
    const {products} = this.state
    const index = products.indexOf(product)
    // console.log('delete this product', product);
    // products.splice(index, 1)
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id)
    // console.log(docRef);
    docRef
      .delete()
      .then(() => {
        console.log('removed successfully');
      })
      .catch((error) => {
        console.log('Error in removin');
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

addDoc = () => {
  firebase
    .firestore()
    .collection('products')
    .add({
      img: '',
      quantity: 1,
      price: 45,
      name: 'Laptop'
    })
    .then((docRef) => {
      console.log(docRef);
    })
    .catch((error) => {
      console.log(error);
    })
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
    const {products, loading} = this.state
    console.log('render called');
    return (
      <div className="App">
        <Navbar
          CartCount = {this.getCartCount()}
        />
        <button onClick={this.addDoc}>Add </button>
        <Cart 
          handleIncreaseQuantity = {this.handleIncrease}
          handleDecreaseQuantity = {this.handleDecrease}
          removeProduct = {this.removeProduct}
          products = {products}
        />
        {loading && <h1>Loading....</h1>}
        <div className='cart-total'><h1>TOTAL = {this.getCartTotal()}</h1></div>
      </div>
    );
  }
}

export default App;
