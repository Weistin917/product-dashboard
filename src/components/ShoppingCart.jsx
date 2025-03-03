import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { products } from "../assets/Products";

function ShoppingCart({ shopcart, addItem, subItem, removeItem }) {
    return (
        <>
            <h2>Shopping Cart</h2>
            {
                shopcart.map((quant, i) => 
                    {if (quant > 0) 
                    return (
                    <Container key={products[i].name}>
                        <Row>
                            <h6>{products[i].name}</h6>
                        </Row>
                        <Row>
                            <Col lg={9}> <h7>Precio: ${products[i].price} | Quantity: {quant}</h7> </Col>
                            <Col lg={3}> <Button variant='outline-info' onClick={()=>addItem(products[i].name)}> + </Button> <h7> {quant} </h7> <Button variant='outline-secondary' disabled={quant<2} onClick={()=>subItem(products[i].name)}> - </Button> <Button variant='danger' onClick={()=>removeItem(products[i].name)}>Remove</Button> </Col>
                        </Row>
                    </Container>
                )})
            }
        </>
    )
}

export default ShoppingCart;