import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { BiSearch } from "react-icons/bi";
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
			padding: 5px 0;
			a {
				color: white;
			}
		}
		.search-box {
			display: flex;
			align-items: center;
			input {
				margin-right: 10px;
				border: unset;
				outline: none;
				padding: 7.5px 10px;
				border-radius: 5px;
			}
			svg {
				width: 2.5rem;
				height: 2.5rem;
				margin-top: 5px;
			}
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
				<li className="search-box">
					<input type={"text"} value={search} onChange={searchHandler} />
					<BiSearch onClick={fetchMovies} />
				</li>
			</ul>
		</Nav>
	);
};

export default Navbar;
