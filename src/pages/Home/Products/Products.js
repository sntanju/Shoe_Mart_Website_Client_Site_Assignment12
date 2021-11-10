import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    return (
        <div>
            <h2 className="our-product">Our Products</h2>
            <div className="products">
                {
                        products.map(product => <Product
                        key = {product.id}
                        product={product}
                        ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;