import React from "react";
import Movie from "../Movie";
import styled from "styled-components";
import FetchFailed from "../FetchFailed";

export const MoviesSections = styled.main`
	max-width: ${({ theme }) => theme.width.maxWidth};
	margin: 0 auto;
	h2 {
		margin: 1rem 0.5rem;
	}
	.sections {
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px 0px;
		margin: 5px auto;
	}
	@media screen and (min-width: ${({ theme }) => theme.screenSizes.sm}) {
		.sections {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px 0px;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.screenSizes.md}) {
		.sections {
			grid-template-columns: repeat(3, 1fr);
			gap: 10px 0px;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.screenSizes.lg}) {
		.sections {
			grid-template-columns: repeat(4, 1fr);
			gap: 10px 0px;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.screenSizes.xl}) {
		.sections {
			grid-template-columns: repeat(5, 1fr);
			gap: 10px 0px;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.screenSizes.xxl}) {
		.sections {
			grid-template-columns: repeat(5, 1fr);
			gap: 10px 0px;
		}
	}
`;
function withMovies(WrappedComponent, pageTitle, url) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				movies: {},
			};
		}
		componentDidMount() {
			if (url) {
				const fetchMovies = async () => {
					await fetch(url)
						.then((result) => {
							return result.json();
						})
						.then((data) => {
							this.setState({ ...this.state, movies: data.results });
						})
						.catch((err) => {
							console.log(err);
						});
				};
				fetchMovies();
			}
		}
		render() {
			return (
				<WrappedComponent>
					<MoviesSections>
						<h2>{pageTitle}</h2>
						<div className="sections">
							{this.state.movies.length > 0 ? (
								this.state.movies.map((movie) => (
									<Movie key={movie.id} movie={movie} />
								))
							) : (
								<FetchFailed />
							)}
						</div>
					</MoviesSections>
				</WrappedComponent>
			);
		}
	};
}

export default withMovies;
