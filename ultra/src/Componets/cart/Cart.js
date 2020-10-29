import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const number = cart[i];
        totalPopulation = totalPopulation + number.population;
        
    }
    return (
        <div>
            <h2>population : {cart.length}</h2>
            <p>population : {totalPopulation}</p>
        </div>
    );
};

export default Cart;