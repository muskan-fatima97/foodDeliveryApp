import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Row, Col, Button, Image, Card,
  InputGroup, FormControl,
} from 'react-bootstrap';
import { Plus, Dash } from 'react-bootstrap-icons';
import { useCart } from '../context/cartContext';

const AddToCart = () => {
  const navigate = useNavigate();
  const { cartItems, updateItemQuantity } = useCart();

  const handleAddMore = () => {
    navigate('/'); 
  };

  if (cartItems.length === 0) {
    return <div className="text-center mt-5">No items in cart.</div>;
  }

  return (
    <Container className="my-5">
      {cartItems.map((item, index) => (
        <Row key={item.id} className="align-items-center mb-4">
          <Col md={6} className="text-center">
            <Image src={item.image} rounded fluid />
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <h4>Select Quantity</h4>
            <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
              <Button variant="outline-secondary" onClick={() => updateItemQuantity(index, -1)}>
                <Dash />
              </Button>
              <FormControl value={item.quantity} readOnly className="text-center" />
              <Button variant="outline-secondary" onClick={() => updateItemQuantity(index, 1)}>
                <Plus />
              </Button>
            </InputGroup>
          </Col>
        </Row>
      ))}

      <div className="text-center">
        <Button variant="primary" className="me-2" onClick={handleAddMore}>
          Add More Items
        </Button>
        <Button variant="success" size="lg">
          Place Order
        </Button>
      </div>
    </Container>
  );
};

export default AddToCart;
