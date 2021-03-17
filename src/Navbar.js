
import React from 'react'
import './navbarStyle.css'

function Navbar(props){
        return(
            <div className='navbar'>
                <div className='cart-icon-container'>
                    <i className="fas fa-shopping-cart cart-icon"></i>
                    <span className='cart-count'>{props.CartCount}</span>
                </div>
            </div>
        )
}


export default Navbar;