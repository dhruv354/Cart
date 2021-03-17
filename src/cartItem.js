import React from 'react'
import './App.css'

class CartItem extends React.Component {
    // constructor(){
    //     super()
        // this.state = {
        //     item : 'phone',
        //     price: '999',
        //     quantity: 1,
        //     img: ''
    //     }
        // this.increment = this.increment.bind(this)
        // or use arrow function


    increment = () => {
         //setState is asychrounous so 
        //dont depend on this.state object because it may get
        //rendered even the request is not finished
        //thats why we pass an extra callback
        // console.log(this.state);
        // function to set state in react
        // set state form 1
        // this.setState({
        //     quantity: this.state.quantity + 1
        // })
        
        // set state form 2
        this.setState((prevState) => {
            return {
                quantity: prevState.quantity + 1
            }
        }, () => {
            return(
                console.log(this.state)
            )
        })
    }

    decrement = () => {
        this.setState((prevState) => {
            if(prevState.quantity === 0){
                return 
            }
            return{
                quantity: prevState.quantity - 1
            }
        })
    }
    render(){
        const {item, price, quantity} = this.props.product
        return(<div className='cart-item'>
            <div className='left-block'>
                <img style={Styles.image}/>
            </div>
            <div className='right-block'>
                <div style={{fontSize: 30}}>{item}</div>
                <div style={{color: '#777', fontSize:30}}>{price}</div>
                <div style={{color: '#777', fontSize: 30}}>Qty: {quantity}</div>
                <div className='cart-item-actions'>
                    {/* buttons for actions */}
                    <i 
                    className="fas fa-plus-circle action-icons"
                    // bind here or in constructor of class
                    onClick={this.increment} ></i> 
                     <i 
                     className="fas fa-minus-circle action-icons"
                     onClick = {this.decrement}></i>
                     <i 
                     className="fas fa-trash-alt action-icons"
                     onClick={this.increment}></i>
                </div>
            </div>
        </div>
        );
    }
}


const Styles = {
    image: {
        width: 175,
        height: 175,
        borderRadius: 4,
        background: 'grey'
    }
}
export default CartItem