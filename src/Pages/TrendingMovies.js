import React from "react";
import withMovies from "../Components/HigherOrderComponents/withMovies";

const TrendingMovies = ({ movies, children }) => {
	return <>{children}</>;
};

export default withMovies(
	TrendingMovies,
	"https://api.themoviedb.org/3/trending/movie/day?api_key=d114dfa16205db06cd554385efbfa351"
);
