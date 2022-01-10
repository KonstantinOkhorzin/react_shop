import React from 'react';

function Cart({quantity}) {
    return (
        <div className='cart deep-orange accent-4 white-text'>
            <i class="material-icons ">shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}

export default Cart;