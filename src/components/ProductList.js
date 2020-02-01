import React, {
    Component
} from 'react';
import Product from './ProductListItem.js'
import ProductInCart from './ProductInCart.js'
import WaterWaste from './WaterWaste.js'
// import { all } from 'q';
import '../ProductList.css'


class ProductList extends Component {
    state = {
        select: 'all',

    }

    handleCategoryFilter(option) {
        this.setState({
            select: option,
        })

    }

    filterCategory = () => {
        let products = this.props.products;
        switch (this.state.select) {
            case "all":
                products = products.filter(product => product.active === true)
                return products.map(product => <Product product={product} key={product.id} buy={this.props.buy} />)
            case "food":
                products = products.filter(product => product.category === "food" && product.active === true);
                return products.map(product => <Product product={product} key={product.id} buy={this.props.buy} />)
            case "cloth":
                products = products.filter(product => product.category === "cloth" && product.active === true);
                return products.map(product => <Product product={product} key={product.id} buy={this.props.buy} />)
            case "everyday":
                products = products.filter(product => product.category === "everyday" && product.active === true);
                return products.map(product => <Product product={product} key={product.id} buy={this.props.buy} />)
            default:
                return "Nie ma takie kategorii"

        }
    }

    boughtProducts = () => {
        const bought = this.props.products.filter(product => product.active === false);

        const boughtProducts = bought.map(product => <ProductInCart key={product.id} product={product} remove={this.props.remove} />)

        return boughtProducts

    }



    render() {
        return (
            <section className='box'>
                <section className='list'>
                    <h2>Lista produktów</h2>
                    <div className='button_holder'>
                        <button onClick={this.handleCategoryFilter.bind(this, 'all')}>Wszystko</button><button onClick={this.handleCategoryFilter.bind(this, 'food')}>Produkty spożywcze</button><button onClick={this.handleCategoryFilter.bind(this, 'cloth')}>Ubrania</button><button onClick={this.handleCategoryFilter.bind(this, 'everyday')}>Codzienne</button>
                    </div>
                    <div className='product_list'>
                        {this.filterCategory()}
                    </div>
                </section>
                <div className='right_side'>
                    <section className='cart'>
                        <h2>Twój koszyk</h2>
                        <div className='cart_list'>{this.boughtProducts()}</div>
                    </section>
                    <WaterWaste wasted={this.props.wasted} products={this.props.products} />
                </div>
            </section>
        )
    }

    // const active = props.products.filter(product => product.active === true);
    // const bought = props.products.filter(product => product.active === false);
    // // console.log(active);
    // const activeProducts = active.map(product => <Product key={product.id} product={product} buy={props.buy} />);

    // const boughtProducts = bought.map(product => <ProductInCart key={product.id} product={product} remove={props.remove} />)


    //     return (
    //         <div>
    //             <div className='list'>
    //                 <h2>Lista produktów</h2>
    //                 <button onClick={() => props.all}>Wszystko</button><button onClick={() => props.food}>Produkty spożywcze</button><button onClick={() => props.cloth}>Ubrania</button><button onClick={() => props.everyday}>Codzienne</button>
    //                 {activeProducts}
    //             </div>
    //             <div className='cart'>
    //                 <h2>Twój koszyk</h2>
    //                 {boughtProducts}
    //             </div>
    //             <WaterWaste bought={bought} wasted={props.wasted} products={props.products} />
    //         </div >

    //     );
}

export default ProductList;