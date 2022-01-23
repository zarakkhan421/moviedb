import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFileEarmarkImage, BsFillCalendarDateFill } from "react-icons/bs";
import FetchFailed from "../Components/FetchFailed";
import { AiFillFlag, AiFillStar } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
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
			padding: 20px 30px;
			width: 900px;
			h1 {
				margin: 10px 0;
				font-weight: 400;
				font-size: 2.5rem;
				letter-spacing: 1.5px;
			}
			.meta {
				display: flex;
				.meta-item {
					display: flex;
					margin-right: 5px;
				}
				.genres {
					svg {
						margin-right: 5px;
					}
					.genre-item {
						margin-right: 5px;
					}
				}
				.vote-average svg {
					margin-right: 5px;
				}
				.languages {
					svg {
						margin-right: 5px;
					}
					.language-item {
						margin-right: 5px;
					}
				}
				.date {
					svg {
						margin-right: 5px;
					}
				}
			}
			.subtitle {
				margin-top: 5px;
				font-style: italic;
				font-size: 1.25rem;
				font-weight: 300;
			}
			.overview {
				h4 {
					margin: 5px 0;
					font-weight: 500;
					font-size: 1.5rem;
				}
				p {
					margin: 5px 0;
				}
			}
			.cast {
				height: 400px;
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				overflow-y: scroll;
				scrollbar-color: rebeccapurple green;
				scrollbar-width: thin;
				margin-top: 20px;
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
					margin-bottom: 10px;
					.image {
						img {
							width: 100px;
							height: auto;
							object-fit: cover;
							border-radius: 5px;
						}
						svg {
							width: 100px;
							height: 150px;
						}
					}
					.actor {
						font-weight: 600;
						width: ${({ theme }) => theme.image.singleMoviePageImageWidth};
						word-break: break-all;
					}
					.character {
						font-size: 0.85rem;
						font-style: italic;
						width: ${({ theme }) => theme.image.singleMoviePageImageWidth};
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
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=d114dfa16205db06cd554385efbfa351&language=en-US`
		)
			.then((results) => results.json())
			.then((data) => {
				setMovie(data);
				console.log(data);
			})
			.catch((err) => console.log(err));
		fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=d114dfa16205db06cd554385efbfa351&language=en-US`
		)
			.then((results) => results.json())
			.then((data) => {
				setMovieCasts(data.cast);
				console.log(data.cast);
			})
			.catch((err) => console.log(err));
	}, [movie_id]);

	return (
		<main>
			<MovieDetails>
				{movieCasts.length > 0 ? (
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
											<AiFillStar />
											<span>{movie.vote_average}</span>
										</div>
										<div className="meta-item genres">
											<MdCategory />
											{movie.genres
												? movie.genres.map((genre) => (
														<div className="genre-item" key={genre.id}>
															{genre.name}
														</div>
												  ))
												: "not found "}
										</div>
										<div className="meta-item languages">
											<AiFillFlag />
											{movie.genres
												? movie.spoken_languages.map((language, index) => (
														<div className="language-item" key={index}>
															{language.english_name}
														</div>
												  ))
												: "not found "}
										</div>
										<div className="meta-item date">
											<BsFillCalendarDateFill />
											<span>{movie.release_date}</span>
										</div>
									</div>
									<div className="subtitle">{movie.tagline}</div>
									<div className="overview">
										<h4>Overview</h4>
										<p>{movie.overview}</p>
									</div>
									<div className="cast">
										{movieCasts
											? movieCasts
													.sort(
														(x, y) =>
															Number(y.popularity) - Number(x.popularity)
													)
													.slice(0, 18)
													.map((cast, index) => (
														<div key={index} className="cast-item">
															<div className="image">
																{cast.profile_path ? (
																	<img
																		src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
																		alt={movie.title}
																	/>
																) : (
																	<BsFileEarmarkImage
																		style={{
																			backgroundColor: "#bfbfbf",
																			borderRadius: "5px",
																		}}
																	/>
																)}
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
				) : (
					<FetchFailed />
				)}
			</MovieDetails>
		</main>
	);
};

export default SingleMoviePage;
