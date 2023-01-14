import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const ProductCard = ({ data }) => {
	// type, price, currency, color, gender, quantity ,id
	const { imageURL, name, currency, price } = data;
	return (
		<>
			<Card style={{ width: '13rem' }}>
				<Card.Img
					variant='top'
					src={imageURL}
					className='productImage'
				/>
				<hr />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text className='dFlexRow justify-content-spaceBetween'>
						<p className='inlineBlock'>
							{currency} {price}
						</p>
						<Button variant='primary'>Add To Cart</Button>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

ProductCard.propTypes = {
	data: PropTypes.object,
	/*id: PropTypes.number,
  imageURL: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  color: PropTypes.string,
  gender: PropTypes.string,
  quantity: PropTypes.number,*/
};
export default React.memo(ProductCard);
