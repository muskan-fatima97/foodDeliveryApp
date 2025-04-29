import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useCart } from '../context/cartContext';
import Shwarma from '../assets/shwarma.png';
import Rigatoni from '../assets/food_25.png';
import ClubSandwitch from '../assets/food_27.png';
import Pasta from '../assets/food_8.png';
import Fusili from '../assets/food_26.png';
import Noodells from '../assets/food_32.png';
import CheeseCake from '../assets/food_18.png';
import Icecream from '../assets/food_9.png';

const Cards = () => {
  const cardData = [
    { id: 1, image: Shwarma, name: "Arabian Shawarma", description: '$20.00 ', rating: 5 },
    { id: 2, image: CheeseCake, name: "Strawberry Pie Cake", description: '$20.00 ', rating: 5 },
    { id: 3, image: Fusili, name: "Hot Sauce Fusilli Pasta", description: '$20.00 ', rating: 5 },
    { id: 4, image: ClubSandwitch, name: "White Sauce Tagliatelle", description: '$20.00 ', rating: 5 },
    { id: 5, image: Icecream, name: "Red Berry Ice Cream", description: '$20.00 ', rating: 5 },
    { id: 6, image: Rigatoni, name: "Rigatoni Bacon Pasta", description: '$20.00 ', rating: 5 },
    { id: 7, image: Noodells, name: "Linguinie Steemed Noodels", description: '$20.00 ', rating: 5 },
    { id: 8, image: Pasta, name: "Cheese Patties", description: '$20.00 ', rating: 5 },
  ];

  return (
    <Container className="mt-4">
      <Row>
        {cardData.map((item) => (
          <Col key={item.id} md={3} sm={6} xs={12} className="mb-4">
            <FoodCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const FoodCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setQuantity(1); 
  };

  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Rating value={item.rating} readOnly size="small" />

        <div className="d-flex justify-content-between align-items-center mt-3">
          <Button className="btn-cart text-nowrap" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <div className="d-flex align-items-center">
            <Button
              size="sm"
              className="btn-out-cart"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              −
            </Button>
            <span className="mx-2 quantity-box">{quantity}</span>
            <Button
              size="sm"
              className="btn-in-cart"
              onClick={() => setQuantity(q => q + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
