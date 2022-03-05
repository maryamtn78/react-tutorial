import React, { Component } from 'react';
import axios from 'axios';
import styles from './Products.module.css'
import Card from "./Card"

class Products extends Component {

    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products") 
        .then(res => this.setState({
            products:res.data
        }))
    }


    render() {
        const {products} = this.state
        return (
            <div className={styles.container}>
                {products.length ? 
                products.map(product => <Card key={product.id} image={product.image} name={product.title} price={`${product.price} $`} /> ):
                <h1>loading ... </h1>}
            </div>
        );
    }
}

export default Products;