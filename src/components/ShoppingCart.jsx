import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { products } from "../assets/Products";

function ShoppingCart({ shopcart }) {
    return (
        <>
            <h2>Shopping Cart</h2>
            <Container>
                <Row>
                    <h6>ProductName</h6>
                </Row>
                <Row>
                    <Col lg={9}> <h7>Precio: $xx.xx | Quantity: n</h7> </Col>
                    <Col lg={3}> <Button variant='outline-info'> + </Button> <h7> n </h7> <Button variant='outline-secondary'> - </Button> <Button variant='danger'>Remove</Button> </Col>
                </Row>
            </Container>
        </>
    )
}

export default ShoppingCart;