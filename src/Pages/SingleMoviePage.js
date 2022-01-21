import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SingleMoviePage = () => {
	let params = useParams();
	const [movie, setMovie] = useState([]);
	const [movieCasts, setMovieCasts] = useState([]);
	const movie_id = params.id;
	console.log(movie_id);
	const MovieDetails = styled.article`
		display: flex;
		justify-content: center;
		.overlay {
			width: calc(500 * 2px);
			height: calc(281 * 2px);
			background-color: rgba(0, 0, 0, 0.6);
		}
		.backdrop {
			background-image: url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}");
			background-repeat: no-repeat;
			background-size: cover;
			width: calc(500 * 2px);
			height: calc(281 * 2px);
		}
		.movie-content {
			display: flex;
			width: calc(500 * 2px);
			height: calc(281 * 2px);
			align-items: center;
			justify-content: space-evenly;
			.poster {
				img {
					width: 250px;
					height: auto;
					object-fit: cover;
				}
			}
			.details {
				background-color: rgba(255, 255, 255, 0.3);
				.meta {
					display: flex;
					.meta-item {
						display: flex;
					}
				}
				.overview {
				}
				.cast {
					display: grid;
					grid-template-columns: repeat(6, 1fr);
					.cast-item {
						.image {
							img {
								width: 50px;
								height: auto;
								object-fit: cover;
							}
						}
					}
				}
			}
		}
	`;
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=d114dfa16205db06cd554385efbfa351&language=en-US`
		)
			.then((results) => results.json())
			.then((data) => {
				setMovie(data);
				console.log(data);
			});
		fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=d114dfa16205db06cd554385efbfa351&language=en-US`
		)
			.then((results) => results.json())
			.then((data) => {
				setMovieCasts(data.cast);
				console.log(data.cast);
			});
	}, [movie_id]);

	return (
		<main>
			<MovieDetails>
				<div className="backdrop">
					<div className="overlay">
						<div className="movie-content">
							<div className="poster">
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.title}
								/>
							</div>
							<div className="details">
								<h1>{movie.title}</h1>
								<div className="meta">
									<div className="meta-item vote-average">
										{movie.vote_average}
									</div>
									<div className="meta-item genres">
										{movie.genres
											? movie.genres.map((genre) => <div>{genre.name}</div>)
											: "not found "}
									</div>
									<div className="meta-item languages">
										{movie.genres
											? movie.spoken_languages.map((language) => (
													<div>{language.english_name}</div>
											  ))
											: "not found "}
									</div>
									<div className="meta-item date">{movie.release_date}</div>
								</div>
								<div className="overview">{movie.overview}</div>
								<div className="cast">
									{movieCasts
										? movieCasts
												.sort(
													(x, y) => Number(y.popularity) - Number(x.popularity)
												)
												.slice(0, 18)
												.map((cast) => (
													<div className="cast-item">
														<div className="image">
															<img
																src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
																alt={movie.title}
															/>
														</div>
														<div>{cast.name}</div>
													</div>
												))
										: "not found"}
								</div>
							</div>
						</div>
					</div>
				</div>
			</MovieDetails>
		</main>
	);
};

export default SingleMoviePage;
