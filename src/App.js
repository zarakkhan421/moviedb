import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PopularMovies from "./Pages/PopularMovies";
import TrendingMovies from "./Pages/TrendingMovies";
import AppContextProvider from "./Context/AppContext";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchMovies from "./Pages/SearchMovies";
import { createGlobalStyle } from "styled-components";
import TopRatedMovies from "./Pages/TopRatedMovies";
import UpCommingMovies from "./Pages/UpCommingMovies";
import SingleMoviePage from "./Pages/SingleMoviePage";
const theme = {
	colors: {
		primary: "#9F0039",
	},
};
const GlobalStyle = createGlobalStyle`
body{
	font-family: 'Roboto', sans-serif;
}
`;
function App() {
	return (
		<>
			<AppContextProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Navbar />
					<Routes>
						<Route path="/popular-movies" element={<PopularMovies />} />
						<Route path="/toprated-movies" element={<TopRatedMovies />} />
						<Route path="/upcomming-movies" element={<UpCommingMovies />} />
						<Route path="/trending-movies" element={<TrendingMovies />} />
						<Route path="/search/:search_term" element={<SearchMovies />} />
						<Route path="/movie/:id" element={<SingleMoviePage />} />
						<Route path="/" element={<Home />} />
						<Route path="*" element={<p>not found</p>} />
					</Routes>
					<Footer />
				</ThemeProvider>
			</AppContextProvider>
		</>
	);
}

export default App;
