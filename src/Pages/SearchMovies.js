import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import withMovies, {
	MoviesSections,
} from "../Components/HigherOrderComponents/withMovies";
import { AppContext } from "../Context/AppContext";
import Movie from "../Components/Movie";
import { FaHome } from "react-icons/fa";
import styled from "styled-components";
const SearchTop = styled.div`
	a {
		margin-top: 5px;
		display: flex;
		align-items: center;
		svg {
			width: 1.5rem;
			height: 1.5rem;
			margin-right: 5px;
		}
		span {
			font-weight: 600;
			font-size: 1.25rem;
		}
	}
	h2 {
		margin: 10px 0;
	}
`;
const SearchMovies = () => {
	const { search, searchMovies } = useContext(AppContext);
	let params = useParams();
	return (
		<>
			<MoviesSections>
				<SearchTop>
					<Link to="/">
						<FaHome />
						<span>Home</span>
					</Link>
					<h2>Search Data for "{params.search_term}"</h2>
				</SearchTop>
				<div className="sections">
					{searchMovies.length > 0
						? searchMovies.map((movie) => (
								<Movie key={movie.id} movie={movie} />
						  ))
						: `seach data for ${search} not found`}
				</div>
			</MoviesSections>
		</>
	);
};

export default withMovies(SearchMovies);
