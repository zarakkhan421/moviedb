import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const Section = styled.section`
	display: flex;
	flex-direction: column;
	margin: 10px 40px;
	h2 {
		margin: 5px 0;
	}
	.section-list {
		display: flex;
		justify-content: space-between;
		gap: 5px;
		.section-item {
			h2 {
				font-size: 1rem;
			}
			img {
				width: 250px;
				height: auto;
				object-fit: cover;
			}
			h2 {
				margin: 5px 0;
			}
			.meta {
				.ratings {
					display: flex;
					align-items: center;
					svg {
						margin-right: 5px;
					}
					span {
						margin-top: 2px;
					}
				}
			}
		}
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
			});
	}, [url]);
	return (
		<Section>
			<h2>{sectionName}</h2>
			<div className="section-list">
				{movies.slice(0, 5).map((movie) => (
					<div className="section-item" key={movie.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
						/>
						<h2>{movie.title}</h2>
						<div className="meta">
							<span className="ratings">
								<AiFillStar />
								<span>{movie.vote_average}</span>
							</span>
						</div>
					</div>
				))}
			</div>
			<Link to={`/${link}`}>See More</Link>
		</Section>
	);
};

export default HomeMoviesSection;
