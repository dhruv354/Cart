import React from 'react';
import CartItem from './cartItem'

function Cart(props){
        const {products} = props
        return(
            <div className='cart'>
                {products.map((product) => {
                    return(
                        <CartItem 
                          product = {product} 
                          key = {product.id}
                          handleIncreaseQuantity = {props.handleIncreaseQuantity}
                          handleDecreaseQuantity = {props.handleDecreaseQuantity}
                          removeProduct = {props.removeProduct}
                         />
                    )
                })}
            </div>
        )
    }

export default Cart