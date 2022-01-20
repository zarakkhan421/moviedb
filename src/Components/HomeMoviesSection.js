import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	margin: 5px 40px;
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
		}
	}
`;

const HomeMoviesSection = ({ sectionName, link, url }) => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((result) => result.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
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
					</div>
				))}
			</div>
			<Link to={`/${link}`}>See More</Link>
		</Section>
	);
};

export default HomeMoviesSection;
