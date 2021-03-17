import React from 'react'
import './App.css'

const CartItem = (props) => {
        const {item, price, quantity, img} = props.product
        return(<div className='cart-item'>
            <div className='left-block'>
                <img style={Styles.image} src={img}/>
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
                    onClick={() => props.handleIncreaseQuantity(props.product)} ></i> 
                     <i 
                     className="fas fa-minus-circle action-icons"
                     onClick = {() => props.handleDecreaseQuantity(props.product)}></i>
                     <i 
                     className="fas fa-trash-alt action-icons"
                     onClick={() => props.removeProduct(props.product)}></i>
                </div>
            </div>
        </div>
        );
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