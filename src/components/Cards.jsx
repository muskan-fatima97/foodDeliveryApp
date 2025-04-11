import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Shwarma from '../assets/shwarma.png';
import Rigatoni from '../assets/food_25.png';
import ClubSandwitch from '../assets/food_27.png';
import Pasta from '../assets/food_8.png';
import Fusili from '../assets/food_26.png';
import Noodells from '../assets/food_32.png';
import CheeseCake from '../assets/food_18.png';
import Icecream from '../assets/food_9.png';
const Cards = () => {
  const card = [
    { id: 1, image: Shwarma, name: "Arabian Shawarma", description: '$20.00 $13.00', rating: 5, button: 'Vegetable' },
    { id: 2, image: Rigatoni, name: "Rigatoni Bacon Pasta", description: '$20.00 $13.00', rating: 5, button: 'Fresh' },
    { id: 3, image: Fusili, name: "Hot Sauce Fusilli Pasta", description: '$20.00 $13.00', rating: 5, button: 'Millets' },
    { id: 4, image: ClubSandwitch, name: "White Sauce Tagliatelle", description: '$20.00 $13.00', rating: 5, button: 'Vegetable' },
    { id: 5, image: Pasta, name: "Cheese Patties", description: '$20.00 $13.00', rating: 5, button: 'Health' },
    { id: 6, image: CheeseCake, name: "Strawberry Pie Cake", description: '$20.00 $13.00', rating: 5, button: 'Nuts' },
    { id: 7, image: Noodells, name: "Linguinie Steemed Noodels", description: '$20.00 $13.00', rating: 5, button: 'Fresh' },
    { id: 8, image: Icecream, name: "Red Berry Ice Cream", description: '$20.00 $13.00', rating: 5, button: 'Fresh' },
  ];
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        {card.map((item, index) => (
          <Col key={index} md={3} sm={6} xs={12} className="product-col">
            <Card className="product-card">
              <div className="image-container">
                <Card.Img variant="top" src={item.image} className="product-img" />
                
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Rating value={item.rating} readOnly size="small" />
                <div className="hover-overlay">
                  <Button variant="success" className="hover-button">Add to Cart</Button>
                </div>
                <div className="category-btn mt-2">
                  <Button size="sm" variant="outline-primary">{item.button}</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards
