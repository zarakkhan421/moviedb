import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import withMovies, {
	MovieList,
} from "../Components/HigherOrderComponents/withMovies";
import { AppContext } from "../Context/AppContext";
import Movie from "../Components/Movie";
const SearchMovies = () => {
	const { search, searchMovies } = useContext(AppContext);
	let params = useParams();
	return (
		<>
			<Link to="/">Home</Link>
			<h2>Search Data for "{params.search_term}"</h2>

			<MovieList>
				{searchMovies.length > 0
					? searchMovies.map((movie) => <Movie key={movie.id} movie={movie} />)
					: `seach data for ${search} not found`}
			</MovieList>
		</>
	);
};

export default withMovies(SearchMovies);
