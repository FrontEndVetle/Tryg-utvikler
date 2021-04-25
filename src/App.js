import './sass/style.scss';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import items from './products';
import { useState } from 'react';

function App() {
	const { products } = items;

	const [cartItems, setCartItems] = useState([]);

	const toggleBuy = (product) => {
		const found = cartItems.some((el) => el.name === product.name);

		if (!found) {
			product.btn = '- Remove from cart';
			setCartItems((prevCart) => [...prevCart, product]);
			console.log(product);
		}

		if (found) {
			const newArray = cartItems.filter((el) => el.name !== product.name);
			{
				product.btn = 'Add to cart';

				setCartItems(newArray);
			}
		}
	};

	return (
		<div className='App'>
			<Header countCartItems={cartItems.length} />
			<Container>
				<Row className='justify-content-between'>
					<Col md='8'>
						<Main toggleBuy={toggleBuy} products={products} />
					</Col>
					<Col md='4'>
						<Cart toggleBuy={toggleBuy} cartItems={cartItems} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
