import React from "react";
import Movie from "../Movie";
import styled from "styled-components";

export const MoviesSections = styled.main`
	max-width: ${({ theme }) => theme.width.maxWidth};
	margin: 0 auto;
	.sections {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 20px 0px;
		margin: 5px auto;
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
							{this.state.movies.length > 0
								? this.state.movies.map((movie) => (
										<Movie key={movie.id} movie={movie} />
								  ))
								: "data not available"}
						</div>
					</MoviesSections>
				</WrappedComponent>
			);
		}
	};
}

export default withMovies;
