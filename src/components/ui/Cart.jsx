import React from 'react';

const Cart = () => {
    return (
        <section id='checkout'>
            <div className="checkout__upper">
                <h1 className='checkout__title'>Cart</h1>
            </div>
            <div className="checkout__lower">
                <h1 className='empty__cart'></h1>
                <div className="checkout__button"></div>
            </div>
        </section>
            
        
    );
}

export default Cart;
