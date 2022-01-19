import React from "react";
import Movie from "./Movie";
import styled from "styled-components";

function withMovies(WrappedComponent, url) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				movies: {},
			};
		}
		componentDidMount() {
			const fetchMovies = async () => {
				await fetch(url)
					.then((result) => {
						console.log("result", result);
						return result.json();
					})
					.then((data) => {
						this.setState({ ...this.state, movies: data.results });
						console.log("data:", data);
					})
					.catch((err) => {
						console.log(err);
					});
			};
			fetchMovies();
		}
		render() {
			return (
				<WrappedComponent>
					{this.state.movies.length > 0
						? this.state.movies.map((movie) => (
								<Movie key={movie.id} movie={movie} />
						  ))
						: "data not available"}
				</WrappedComponent>
			);
		}
	};
}

export default withMovies;
