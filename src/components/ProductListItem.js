import React from 'react';
import '../Product.css'

const Product = (props) => {

    const { text, id } = props.product

    return (
        <div className='product'>
            <p>
                <span>{text}</span>
                <button onClick={() => props.buy(id)} >Kup produkt</button>

            </p>
        </div>

    )
}

export default Product;