import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header({ countCartItems }) {
	return (
		<div>
			<Navbar bg='danger' variant='dark'>
				<Navbar.Brand href='#home'>Tryg Shop</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link>
						{countCartItems ? <Button>Cart item: {countCartItems}</Button> : ''}
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}

export default Header;
