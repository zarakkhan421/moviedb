import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

import styled from "styled-components";
const MovieList = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 20px 0px;
	max-width: 1500px;
	margin: 5px auto;
`;

const PopularMovies = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
		)
			.then((result) => result.json())
			.then((data) => {
				console.log(data.results);
				setMovies(data.results);
			});
	}, []);
	return (
		<MovieList>
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</MovieList>
	);
};

export default PopularMovies;
