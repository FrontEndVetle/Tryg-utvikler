import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';

function Main({ btnText, products, toggleBuy }) {
	return (
		<div className='products'>
			<h1>Products</h1>
			<Row className='justify-content-between'>
				{products.map((product) => (
					<Product key={product.id} product={product} toggleBuy={toggleBuy} />
				))}
			</Row>
		</div>
	);
}

export default Main;
