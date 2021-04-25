import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Cart({ cartItems, toggleBuy }) {
	const itemPrice = cartItems.reduce((a, c) => a + c.price, 0);
	return (
		<div className='cart'>
			<h3>Cart</h3>
			{cartItems.length === 0 && <p> Cart is empty </p>}
			{cartItems.map((item) => (
				<div key={item.id}>
					<ListGroup className='cart__item'>
						<ListGroup.Item>{item.name}</ListGroup.Item>
						<ListGroup.Item>{item.price} kr</ListGroup.Item>
						<ListGroup.Item>
							<b>option:</b> {item.option}
						</ListGroup.Item>

						<ListGroup.Item>
							<Button onClick={() => toggleBuy(item)} variant='outline-danger'>
								- Remove item
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</div>
			))}
			<ListGroup>
				<ListGroup.Item className='cart__price'>
					<b>Total price:</b> {itemPrice} kr
				</ListGroup.Item>
			</ListGroup>
		</div>
	);
}

export default Cart;
