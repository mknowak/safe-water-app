import React from 'react';
import '../ProductInCart.css'

const ProductInCart = (props) => {

    const { text, id } = props.product

    return (
        <div className='product_in_cart'>
            <p>
                <span>{text}</span>
                <button onClick={() => props.remove(id)}>Anuluj</button>

            </p>
        </div >

    )
}

export default ProductInCart;