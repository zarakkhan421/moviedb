import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
const MovieDetails = styled.article`
	display: flex;
	justify-content: center;
	.overlay {
		width: calc(500 * 3.5px);
		height: calc(281 * 3.5px);
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.backdrop {
		width: calc(500 * 3.5px);
		height: calc(281 * 3.5px);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.movie-content {
		display: flex;
		width: calc(500 * 3px);
		height: calc(281 * 3px);
		align-items: center;
		justify-content: space-evenly;
		column-gap: 20px;
		.poster {
			img {
				width: 380px;
				height: auto;
				object-fit: cover;
				border-radius: 5px;
			}
		}
		.details {
			background-color: rgba(255, 255, 255, 0.8);
			border-radius: 5px;
			padding: 20px;
			width: 900px;
			.meta {
				display: flex;
				.meta-item {
					display: flex;
				}
			}
			.overview {
			}
			.cast {
				height: 400px;
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				overflow-y: scroll;
				scrollbar-color: rebeccapurple green;
				scrollbar-width: thin;
				::-webkit-scrollbar {
					width: 10px;
				}

				::-webkit-scrollbar-track {
					box-shadow: inset 0 0 1.5px ${({ theme }) => theme.colors.primary};
					border-radius: 10px;
				}

				::-webkit-scrollbar-thumb {
					background: ${({ theme }) => theme.colors.primary};
					border-radius: 10px;
				}

				::-webkit-scrollbar-thumb:hover {
					background: ${({ theme }) => theme.colors.primaryHover};
				}
				.cast-item {
					display: flex;
					flex-direction: column;
					.image {
						img {
							width: 100px;
							height: auto;
							object-fit: cover;
							border-radius: 5px;
						}
					}
					.actor {
						font-weight: 600;
						word-break: break-all;
					}
					.character {
						font-size: 0.85rem;
						font-style: italic;
						width: 100px;
						word-break: break-all;
					}
				}
			}
		}
	}
`;
const SingleMoviePage = () => {
	let params = useParams();
	const [movie, setMovie] = useState([]);
	const [movieCasts, setMovieCasts] = useState([]);
	const movie_id = params.id;
	console.log(movie_id);

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
				<div
					className="backdrop"
					style={{
						backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
					}}
				>
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
														<div className="actor">{cast.name}</div>
														<div className="character">{cast.character}</div>
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
