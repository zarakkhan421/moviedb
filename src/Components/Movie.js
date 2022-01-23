import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
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
		width: ${({ theme }) => theme.image.movieImageWidth};
		word-break: break-all;
	}
	.meta {
		.ratings {
			display: flex;
			align-items: center;
			svg {
				margin-right: 5px;
				color: #e0ce82;
			}
			span {
				margin-top: 2px;
			}
		}
	}
`;

const Movie = ({ movie }) => {
	return (
		<MovieCard>
			<Link to={`/movie/${movie.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<h3>{movie.title}</h3>
				<div className="meta">
					<span className="ratings">
						<AiFillStar />
						<span>{movie.vote_average}</span>
					</span>
				</div>
			</Link>
		</MovieCard>
	);
};

export default Movie;
