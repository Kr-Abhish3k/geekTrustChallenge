import React from 'react';
import ProductCard from '../card';
import { useSelector } from 'react-redux';
import { getData } from 'library/store/selector';

const ProductList = () => {
	const productData = useSelector(getData);
	console.log('productData : ', productData);
	return (
		<div className='productsListWrapper'>
			<div className='productsList dFlexRow justify-content-spaceBetween'>
				{productData.map((product) => {
					return (
						<div className='productCardWrapper' key={product.id}>
							<ProductCard data={product} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;
