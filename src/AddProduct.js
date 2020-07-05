import React, { Component } from 'react'
import ProductConsumer from './context';
const uniqid = require('uniqid');


class AddProduct extends Component {

    state = {
        product_name : "",
        product_price : "",
    } 

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

   addProduct = (dispatch, e) => {
      e.preventDefault();
      const {product_name,product_price} = this.state;

      const newProduct = {
          id: uniqid(),
          product_name,
          product_price,
      }

      console.log(newProduct)

      dispatch({ type: "ADD_PRODUCT", payload: newProduct});

   }

    render() {
        
        const {product_name,product_price} = this.state;

        return <ProductConsumer>
            {
                value => {
                    const { dispatch } = value;
                    console.log(value.products)
                    return (
                        <div>
                           <form onSubmit = {this.addProduct.bind(this, dispatch)}>
                           <p>Product Name</p>
                           <input 
                            type="text"
                            name = "product_name"
                            value = {product_name}
                            onChange = {this.changeInput}
                            />

                            <p>Product Price</p>
                            <input 
                            type="text"
                            name = "product_price"
                            value = {product_price}
                            onChange = {this.changeInput}
                            />
                            <button type ="submit">Add</button>
                           </form>
                        </div>
                    )
                }
            }
        </ProductConsumer>
    }
}

export default AddProduct;