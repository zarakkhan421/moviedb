import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import FetchFailed from "./FetchFailed";
const Section = styled.section`
	h2 {
		margin: 1rem 2.5rem;
	}
	.movie-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 0 2rem;
	}

	.see-more {
		margin: 0.5rem 2.5rem;
		margin-top: 5px;
		font-size: 1.25rem;
	}
`;

const HomeMoviesSection = ({ sectionName, link, url }) => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((result) => result.json())
			.then((data) => {
				setMovies(data.results);
				console.log(data.results);
			})
			.catch((err) => console.log(err));
	}, [url]);
	return (
		<Section>
			<h2>{sectionName}</h2>
			<div className="movie-list">
				{movies.length > 0 ? (
					movies
						.slice(0, 5)
						.map((movie) => <Movie key={movie.id} movie={movie} />)
				) : (
					<FetchFailed />
				)}
			</div>
			<Link to={`/${link}`} className="see-more">
				See More
			</Link>
		</Section>
	);
};

export default HomeMoviesSection;
