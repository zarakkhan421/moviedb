import React from "react";
import withMovies from "../Components/HigherOrderComponents/withMovies";

const TopRatedMovies = ({ movies, children }) => {
	return <>{children}</>;
};

export default withMovies(
	TopRatedMovies,
	"Top Rated Movies",
	"https://api.themoviedb.org/3/movie/top_rated?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
);
