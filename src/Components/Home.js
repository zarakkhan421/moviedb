import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Home = () => {
	const { search, searchMovies } = useContext(AppContext);
	return (
		<main>
			{search ? searchMovies.map((movie) => <div>{movie.title}</div>) : ""}
		</main>
	);
};

export default Home;
