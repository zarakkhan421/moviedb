import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
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
	const { searchHandler, search, fetchMovies } = useContext(AppContext);
	return (
		<Nav>
			<ul>
				<li className="logo">
					<Link to="/">MovieDB</Link>
				</li>
				<li>
					<input type={"text"} value={search} onChange={searchHandler} />
					<BsSearch onClick={fetchMovies} />
				</li>
			</ul>
		</Nav>
	);
};

export default Navbar;
