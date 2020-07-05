import React, { Component } from 'react'


const ProductContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(product => action.payload !== product.id)
            }
            case "ADD_PRODUCT":
                return {
                    ...state,
                    products: [...state.products, action.payload]
                }
            default: 
            return state
    }
}

export class ProductProvider extends Component {

    state = {
        products: 
        [
            {
            id: 1,
            product_name: "MacBook",
            product_price: "1000",
            },
            {
            id: 2,
            product_name: "Samsung",
            product_price: "800",
            },
            {
            id: 3,
            product_name: "Asus",
            product_price: "700",
            },
        ],
        dispatch: action => {
            this.setState(state => reducer(state,action))
        }
    }
    render() {
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export default ProductConsumer;