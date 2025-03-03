import React from 'react';
import { Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { products } from "../assets/Products";

function Home() {
    return (
        <>
        <h2>Product List</h2>
        <Stack gap={3} style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
            {products.map((product) => (
                <>
                    <NavLink key={product.name} to={`/details/${product.name}`} style={() => ({fontSize:24, fontWeight:"bold", textDecoration:"none"})}>{product.name}</NavLink>
                    <h4>Price: ${`${product.price}`}</h4>
                </>
            ))}
        </Stack>
        </>
    );
}

export default Home;