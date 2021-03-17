import React from 'react';
import CartItem from './cartItem'

class Cart extends React.Component {
    constructor(){
        super()
        this.state = {
            products: [
                {
                    item : 'phone',
                    price: '999',
                    quantity: 1,
                    img: '',
                    id: 1
                },

                {
                    item : 'Watch',
                    price: '500',
                    quantity: 1,
                    img: '',
                    id: 2
                },

                {
                    item : 'computer',
                    price: '10000',
                    quantity: 1,
                    img: '',
                    id: 3
                }
            ]
        }

    }

    render(){
        const {products} = this.state
        return(
            <div className='cart'>
                {products.map((product) => {
                    return(
                        <CartItem 
                          product = {product} 
                          key = {product.id}
                         />
                    )
                })}
            </div>
        )
    }
}

export default Cart