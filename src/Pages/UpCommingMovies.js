import React from "react";
import withMovies from "../Components/HigherOrderComponents/withMovies";

const UpCommingMovies = ({ movies, children }) => {
	return <>{children}</>;
};

export default withMovies(
	UpCommingMovies,
	"UpComming Movies",
	"https://api.themoviedb.org/3/movie/upcoming?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&page=1"
);
