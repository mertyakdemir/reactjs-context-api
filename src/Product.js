import React, { Component } from 'react'
import ProductConsumer from "./context";

class Product extends Component {

    deleteProduct = (dispatch, e) => {
        const { id } = this.props;
        dispatch({ type: "DELETE_PRODUCT", payload: id });
    }
    render() {

        // Destructing
        const { id, product_name, product_price } = this.props;
        return (
            <ProductConsumer>
                {
                    value => {
                        const { dispatch } = value;

                        return (
                            <div key={id}>
                                <h1>Product Name {product_name}</h1>
                                <h4>Product Price {product_price}</h4>
                                <button onClick={this.deleteProduct.bind(this, dispatch)}>Remove Product</button>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
            )
    }
}


export default Product;