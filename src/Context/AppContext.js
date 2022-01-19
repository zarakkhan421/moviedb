import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

function AppContextProvider(props) {
	const [searchMovies, setSearchMovies] = useState([]);
	const [search, setSearch] = useState("");
	const navigate = useNavigate();
	const [isSearched, setIsSearched] = useState(false);

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};

	console.log("render before useEffect");
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=d114dfa16205db06cd554385efbfa351&language=en-US&query=${search}&page=1&include_adult=false`
		)
			.then((result) => result.json())
			.then((data) => {
				setSearchMovies(data.results);
				if (isSearched && search.length > 0) {
					navigate("/search");
				}
				setIsSearched(true);
			});

		if (isSearched && search.length === 0) {
			navigate(-1);
		}
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
