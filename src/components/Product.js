import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Product({ product, toggleBuy }) {
	const [selectedOption, setOption] = useState();
	return (
		<Col md='6'>
			<Card className='product'>
				<Card.Img
					className='product__img'
					variant='top'
					src={product.img}
					alt={product.name}
				/>
				<Card.Body>
					<Card.Title>
						<h4>{product.name} </h4>
					</Card.Title>
					<Card.Text>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<b>Price:</b> {product.price} kr
							</ListGroup.Item>
							<ListGroup.Item>
								<Form>
									<Form.Group
										value={selectedOption}
										onChange={(e) => {
											const selectedOption = e.target.value;
											setOption(selectedOption);
											product.option = selectedOption;
										}}
										controlId='exampleForm.SelectCustom'>
										<Form.Label>Select option</Form.Label>
										<Form.Control as='select' custom>
											<option>none selected</option>

											{product.options.map((option, i) => (
												<option key={i}>{option}</option>
											))}
										</Form.Control>
									</Form.Group>
								</Form>
							</ListGroup.Item>
						</ListGroup>
					</Card.Text>
					<Button onClick={() => toggleBuy(product)} variant='outline-danger'>
						{product.btn}
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default Product;
