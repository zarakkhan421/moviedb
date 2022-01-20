import React from "react";
import Movie from "../Movie";
import styled from "styled-components";

export const MovieList = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 20px 0px;
	max-width: 1500px;
	margin: 5px auto;
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
					<h2>{pageTitle}</h2>
					<MovieList>
						{this.state.movies.length > 0
							? this.state.movies.map((movie) => (
									<Movie key={movie.id} movie={movie} />
							  ))
							: "data not available"}
					</MovieList>
				</WrappedComponent>
			);
		}
	};
}

export default withMovies;
