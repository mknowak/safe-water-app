import React, {
  Component
} from 'react';
import ProductList from './ProductList.js'
import { all } from 'q';

import '../App.css';


class App extends Component {
  state = {
    select: all,
    products: [{
      id: 0,
      text: "Butelka wody 1.5l",
      category: "everyday",
      production: 7.5,
      eko: 1.5,
      cansave: 6,
      active: true,

    },
    {
      id: 1,
      text: "Mięso wołowe 1kg",
      category: "food",
      production: 15415,
      eko: 322,
      cansave: 15093,
      active: true,
    },
    {
      id: 2,
      text: "Mięso wieprzowe 1kg",
      category: "food",
      production: 5988,
      eko: 322,
      cansave: 5666,
      active: true,
    },
    {
      id: 3,
      text: "Mięso z kurczaka 1kg",
      category: "food",
      production: 4325,
      eko: 322,
      cansave: 4003,
      active: true,
    },
    {
      id: 4,
      text: "Książka ok. 400 stron",
      category: "everyday",
      production: 125,
      eko: 0.6,
      cansave: 124.4,
      active: true,
    },
    {
      id: 5,
      text: "Para jeansów",
      category: "cloth",
      production: 11000,
      eko: 5500,
      cansave: 5500,
      active: true,
    },
    {
      id: 6,
      text: "Bawełniania koszulka",
      category: "cloth",
      production: 2500,
      eko: 1250,
      cansave: 1250,
      active: true,
    },
    {
      id: 7,
      text: "Plastikowa torba na zakupy",
      category: "everyday",
      production: 0.8,
      eko: 0.2,
      cansave: 0.6,
      active: true,
    },
    {
      id: 8,
      text: "Pielucha jednorazowa",
      category: "everyday",
      production: 545,
      eko: 1,
      cansave: 544,
      active: true,
    },



    ],
  }



  buyProduct = (id) => {
    const products = [...this.state.products];
    products.forEach(product => {
      if (product.id === id) {
        product.active = false
      }
    });
    this.setState({
      products
    })


  }

  removeProduct = (id) => {
    const products = [...this.state.products];
    products.forEach(product => {
      if (product.id === id) {
        product.active = true
      }
    });
    this.setState({
      products
    })
  }





  render() {
    return (
      <div className='wrapper' >
        <header>
          <h1> Save water! </h1>
        </header>

        <ProductList products={this.state.products} buy={this.buyProduct}
          remove={this.removeProduct} />

      </div>

    );
  }

}

export default App;