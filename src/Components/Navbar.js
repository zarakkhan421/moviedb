import styled from "styled-components";

const Nav = styled.nav`
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
	display: flex;
	align-items: center;
	height: 6rem;
	ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 1rem 2rem;
		width: 100%;
		.logo {
			font-weight: 500;
			font-size: 1.5rem;
		}
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<ul>
				<li className="logo">MovieDB</li>
				<li>
					<form>
						<input />
						<button>Search</button>
					</form>
				</li>
			</ul>
		</Nav>
	);
};

export default Navbar;
