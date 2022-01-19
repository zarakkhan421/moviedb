import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

function AppContextProvider(props) {
	const [searchMovies, setSearchMovies] = useState([]);
	const [search, setSearch] = useState("");

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};

	console.log("render before useEffect");

	useEffect(() => {
		if (search) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&query=${search}&page=1&include_adult=false`
			)
				.then((result) => result.json())
				.then((data) => {
					setSearchMovies(data.results);
					console.log(data);
				});
		}
		console.log("useEffect", search);
	}, [search]);

	console.log("after useEffect");

	const data = {
		search,
		searchHandler,
		searchMovies,
	};

	return (
		<AppContext.Provider value={data}>{props.children}</AppContext.Provider>
	);
}

export default AppContextProvider;
