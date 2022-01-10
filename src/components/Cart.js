import React from 'react';

function Cart({quantity, handleBasketShow}) {
    return (
        <div className='cart deep-orange accent-4 white-text' onClick={handleBasketShow}>
            <i class="material-icons ">shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}

export default Cart;