import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cart from '../../molecules/cart';
const Header = () => {
	return (
		<div className='headerWrapper'>
			<Navbar bg='dark' variant='dark'>
				<Nav className='dFlexRow justify-content-spaceBetween header'>
					<Navbar.Brand href='#'>TeeRex Store</Navbar.Brand>
					<div className='dFlexRow'>
						<Nav.Link href='/'>Products</Nav.Link>
						<Nav.Link href='/cart'>
							<Cart />
						</Nav.Link>
					</div>
				</Nav>
			</Navbar>
		</div>
	);
};

export default React.memo(Header);
