import React, { useContext } from "react";
import withMovies, {
	MovieList,
} from "../Components/HigherOrderComponents/withMovies";
import { AppContext } from "../Context/AppContext";
import Movie from "../Components/Movie";
const SearchMovies = () => {
	const { search, searchMovies } = useContext(AppContext);
	return (
		<MovieList>
			{search
				? searchMovies.map((movie) => <Movie key={movie.id} movie={movie} />)
				: ""}
		</MovieList>
	);
};

export default withMovies(SearchMovies);
