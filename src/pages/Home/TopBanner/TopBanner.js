import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <h2 className="web-name ">Welcome To Shoe Mart</h2>
            <Container fluid>              
                <Row className="top-banner">
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/04/History-of-Shoes-Pile-of-Shoes.jpg" alt="" />
                    </Col>
                    <Col xs={12} lg={6} md={6} >
                        <h2>Choose The Best Shoe </h2>
                        <p>Here you will get the most beautiful, latest and the popular shoes of<br/> the world.So come here and buy the shoe as you like.<br/> We maintain the quality of our products.</p>
                        <Button variant="success" size="lg" className="text-light">Details</Button>
                    </Col>
                </Row>                
            </Container>
        </div>
    );
};

export default TopBanner;