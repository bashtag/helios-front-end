import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavItem,
	NavLink,
	Nav,
} from 'reactstrap';
import SearchBar from './SearchBar';

const Navi = (args) => {

	return (
		<div>
			<Navbar {...args}>
				<NavbarBrand href="/">helyos</NavbarBrand>
				<Nav>
					<NavItem>
						<SearchBar />
					</NavItem>
				</Nav>
				<Nav>
					<NavItem>
						<NavLink href="https://github.com/reactstrap/reactstrap">
							GitHub
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	)
}

export default Navi
