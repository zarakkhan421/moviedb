import React from "react";
import withMovies from "../Components/HigherOrderComponents/withMovies";

const PopularMovies = ({ children }) => {
	return <>{children}</>;
};

export default withMovies(
	PopularMovies,
	"Popular Movies",
	"https://api.themoviedb.org/3/movie/popular?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
);
