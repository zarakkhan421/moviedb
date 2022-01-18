import React from "react";
import styled from "styled-components";

const MovieCard = styled.article`
	display: flex;
	flex-direction: column;
	img {
		width: 250px;
		height: auto;
		object-fit: cover;
	}
	h3 {
		margin: 5px 0;
	}
	.meta {
		span {
			margin-right: 10px;
		}
	}
`;

const Movie = ({ movie }) => {
	return (
		<MovieCard>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
			/>
			<h3>{movie.title}</h3>
			<div className="meta">
				<span>{movie.vote_average}</span>

				<span>{movie.release_date}</span>
			</div>
		</MovieCard>
	);
};

export default Movie;
