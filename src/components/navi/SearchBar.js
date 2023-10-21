import React from 'react'
import { Button, Input} from 'reactstrap'
import { FaSearch } from 'react-icons/fa';

const SearchBar = (
	{
		onChange
	}
) => {
	return (
		<div className='d-flex border rounded'>
				<Input
					placeholder='Search for stocks and more'
					type='text'
					className='border-0'
					onChange={onChange}
				></Input>
				<Button
					color='primary'
					className='border-0'
				>
					<FaSearch/>
				</Button>
		</div>
	)
}

export default SearchBar
