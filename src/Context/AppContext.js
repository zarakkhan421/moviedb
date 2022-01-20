import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

function AppContextProvider(props) {
	const [searchMovies, setSearchMovies] = useState([]);
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};

	const fetchMovies = () => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&query=${search}&page=1&include_adult=false`
		)
			.then((result) => result.json())
			.then((data) => {
				setSearchMovies(data.results);
				navigate(`/search/${search}`);
			});
	};

	const data = {
		search,
		searchHandler,
		searchMovies,
		fetchMovies,
	};

	return (
		<AppContext.Provider value={data}>{props.children}</AppContext.Provider>
	);
}

export default AppContextProvider;
