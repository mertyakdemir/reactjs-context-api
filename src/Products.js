import React, { Component } from 'react'
import Product from "./Product";
import AddProduct from "./AddProduct";
import ProductConsumer from './context';


class Products extends Component {

    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { products } = value;
                        return (
                            <div>
                                {
                                    products.map(product => {
                                        return (
                                           <Product 
                                           key = {product.id} 
                                           id = {product.id}
                                           product_name = {product.product_name} 
                                           product_price = {product.product_price} 
                                           />
                                        )
                                    })
                                }
                                <AddProduct />
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}

export default Products;
