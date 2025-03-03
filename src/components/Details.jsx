import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { products } from "../assets/Products";

function Details({ addItem }) {
    let { productName } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.name === productName);

    if (!product) {
        return <h5>Product not found.</h5>;
    }

    return (
        <>
            <h2>{product.name}</h2>
            <h3>Price: ${product.price}</h3>
            <h5>{product.description}</h5>
            <Button variant='outline-success' style={{marginRight:20}} onClick={addItem}>Add to cart</Button> <Button variant='outline-dark' onClick={()=>{navigate("/")}}>Back to products</Button>
        </>
    );
}

export default Details;