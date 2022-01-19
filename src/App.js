import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PopularMovies from "./Components/PopularMovies";
import TrendingMovies from "./Components/TrendingMovies";
import AppContextProvider from "./Context/AppContext";
import Home from "./Components/Home";
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
					<Home />
					<PopularMovies />
					<hr />
					<TrendingMovies />
					<Footer />
				</ThemeProvider>
			</AppContextProvider>
		</>
	);
}

export default App;
