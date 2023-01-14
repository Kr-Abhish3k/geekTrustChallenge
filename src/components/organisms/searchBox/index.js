import React from 'react';
import Input from '../../molecules/input/index.js';
import { MdSearch } from 'react-icons/md';

const SearchBox = () => (
	<div className='searchFormWrapper dFlexRow justify-content-spacearound'>
		<form className='searchForm'>
			<div className='input-group rounded'>
				<Input
					type='search'
					className='form-control rounded'
					placeholder='Search'
					aria-label='Search'
					aria-describedby='search-addon'
				/>
				<span className='input-group-text border-0' id='search-addon'>
					<MdSearch />
				</span>
			</div>
		</form>
	</div>
);

export default React.memo(SearchBox);
