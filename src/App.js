import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PopularMovies from "./Pages/PopularMovies";
import TrendingMovies from "./Pages/TrendingMovies";
import AppContextProvider from "./Context/AppContext";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchMovies from "./Pages/SearchMovies";
const theme = {
	colors: {
		primary: "#9F0039",
	},
};
function App() {
	return (
		<>
			<AppContextProvider>
				<ThemeProvider theme={theme}>
					<Navbar />
					<Routes>
						<Route path="/popular-movies" element={<PopularMovies />} />
						<Route path="/trending-movies" element={<TrendingMovies />} />
						<Route path="/search" element={<SearchMovies />} />
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
