import React from "react";
import withMovies from "./withMovies";

import styled from "styled-components";
const MovieList = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 20px 0px;
	max-width: 1500px;
	margin: 5px auto;
`;

const TrendingMovies = ({ movies, children }) => {
	// const [movies, setMovies] = useState([]);
	// useEffect(() => {
	// 	fetch(
	// 		"https://api.themoviedb.org/3/movie/popular?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
	// 	)
	// 		.then((result) => result.json())
	// 		.then((data) => {
	// 			console.log(data.results);
	// 			setMovies(data.results);
	// 		});
	// }, []);
	return (
		<MovieList>
			{/* {movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))} */}
			{children}
		</MovieList>
	);
};

export default withMovies(
	TrendingMovies,
	"https://api.themoviedb.org/3/movie/popular?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
);
