import React from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useCart } from '../context/CartContext'; // Import useCart instead of CartContext

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Use useCart hook to access cartItems and removeFromCart

  return (
    <Container>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroupItem key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <Button color="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;
